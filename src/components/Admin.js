import React, { Component } from "react";
import { Button, Form, Grid, Container, Card, Image,Modal} from "semantic-ui-react";
import axios from "axios";
import Cookies from "universal-cookie"; // PACCHETTO PER SETTARE E RITROVARE I COOKIE
import ModaleModifica from './subComponents/ModaleModifica'
import ModaleElimina from './subComponents/ModaleElimina'
import ModaleCrea from './subComponents/ModaleCrea'
//PROCEDURA PER IL FILE .ENV 
const dotenv = require("dotenv");
dotenv.config();


const cookies = new Cookies();

export default class Admin extends Component {
    //STATO
  constructor(props) {
    super(props);
    this.state = {
      utente: "",
      psw: "",
      show: false,
      data: [],
      modalOpen:false,
      modalOpenM:false,
      modalOpenC:false
    };
  }
//RICEVE GLI ARTICOLI AL MOUNT
  componentDidMount() {
    axios
      .get("http://localhost:4000/Blog/")
      .then(x => {
        this.setState({ data: x.data });
      })
      .catch(x => {});
  }
     //FUNZIONE PER CHIUDERE LA MODALE DELL'ELIMINA
    handleClose= () => {this.setState({modalOpen:false})}
     //FUNZIONE PER CHIUDERE LA MODALE DEL MODIFICA
    handleCloseM= () => {this.setState({modalOpenM:false})}
     //FUNZIONE PER CHIUDERE LA MODALE CREA
    handleCloseC= () => {this.setState({modalOpenC:false})}
  

  //FUNZIONE PER MANTENERE LE INFORMAZIONI QUANDO SCRIVI DA TASTIERA
  handleChange(e) {
    // If you are using babel, you can use ES 6 dictionary syntax
    let change = {
      [e.target.name]: e.target.value
    };
    this.setState(change);
  }

  //FUNZIONE AL SUBMIT DEL FORM
  handleSubmit(event) {
    if (
      this.state.psw === process.env.REACT_APP_PSW &&
      this.state.utente === process.env.REACT_APP_UTENTE &&
      this.state.show === false
    ) {
      this.setState({ show: true });
    }
  }

  render() {
      //FUNZIONI PER SETTARE L'ITEM CORRENTE E APRIRE LA MODALE DI RIFERIMENTO
    this.handleShowM = (item) => {
        this.setState({activeItem:item}, ()=> this.setState({ modalOpenM: true }));
     };
     this.handleShow = (item) => {
        this.setState({activeItem:item}, ()=> this.setState({ modalOpen: true }));
     };
     this.handleShowC = () => {
    this.setState({ modalOpenC: true });
     };
    return(
    this.state.psw === process.env.REACT_APP_PSW && this.state.utente === process.env.REACT_APP_UTENTE && this.state.show === true) // UTENTE HA SCRITTO USERNAME E PASSWORD GIUSTI ED HA CLICCATO SUBMIT
        ||
    (process.env.REACT_APP_PSW === cookies.get("psw") && cookies.get("user") === process.env.REACT_APP_UTENTE) // UTENTE GIÀ FATTO L'ACCESSO IN PASSATO
        ?//SE VERO ALLORA
        (
            <>


      <Container style={{ marginTop: "7em" }}>
      <center>
            <div style={{margin:"5%"}}>
                <Button fluid  positive  onClick={this.handleShowC}>Aggiungi nuovo articolo</Button>
            </div>
            </center>
        <style>
          {` html,
            body {
              background-color: #f6f6f6 !important;
             }
                `}
        </style>
        {/* <Card.Group itemsPerRow={3} doubling> */}
        <Grid stackable centered columns={3}>
            {/* MAPPO GLI ARTICOLI */}
          {this.state.data.map(article => (
            <Grid.Column key={article._id}>
              <Card key={article._id} >
                <Image src={article.Immagine} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{article.Titolo}</Card.Header>
                  <Card.Meta>
                    <span className="date">{article.Data}</span>
                  </Card.Meta>
                  <Card.Description>{article.Sottotitolo}</Card.Description>
                </Card.Content>
                <div
                  style={{
                    margin: "3%"
                  }}
                >
                    {/* AGGIUNGO I BOTTONI MODIFICA ED ELIMINA */}
                  <Grid centered stackable columns={3}>
                      <Grid.Column><Button onClick={()=> this.handleShowM(article)} positive>modifica</Button></Grid.Column>
                  <Grid.Column><Button onClick={()=> this.handleShow(article)} negative>elimina</Button></Grid.Column>
                  </Grid>
                </div>
              </Card>
            </Grid.Column>
          ))}

        </Grid>
        {/* </Card.Group> */}
        
        <Grid.Column>
            {/* MODALI */}
                        <Modal open={this.state.modalOpenM}>
                            <ModaleModifica close={this.handleCloseM} articolo = {this.state.activeItem}></ModaleModifica>
                        </Modal>
                      
                    </Grid.Column>
                    <Grid.Column>
                      <Modal open={this.state.modalOpen}>
                            <ModaleElimina close={this.handleClose} articolo={this.state.activeItem}></ModaleElimina>
                      </Modal>
                    </Grid.Column>
                    <Grid.Column>
                      <Modal open={this.state.modalOpenC}>
                            <ModaleCrea close={this.handleCloseC}></ModaleCrea>
                      </Modal>
                    </Grid.Column>
      </Container>
</>
    )
        : //SE LA CONDIZIONE ALL'INIZIO INVECE è FALSA ALLORA
    (
        //MOSTRO IL FORM DEL LOGIN ADMIN
        <Container>
      <center>
        <div>
          <Form size="large" onSubmit={this.handleSubmit.bind(this)}>
              {/* NOME UTENTE */}
            <Form.Field>
              <label>Utente</label>
              <input
                placeholder="Utente"
                name="utente"
                value={this.state.utente}
                onChange={this.handleChange.bind(this)}
              />
            </Form.Field>
            {/* PASSWORD */}
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                value={this.state.psw}
                name="psw"
                onChange={this.handleChange.bind(this)}
              />
            </Form.Field>
            {/* SUBMIT */}
            <Button
              positive="positive"
              type="submit"
              //AL CLICK DEL BOTTONE SETTO I COOKIE CON LE CREDENZIALI -> SE LE CREDENZIALI SONO GIUSTE ALLORA AL PROSSIMO
              //INGRESSO L'UTENTE NON DEVE DI NUOVO FARE L'ACCESSO
              onClick={x => {
                cookies.set("user", this.state.utente, { path: "/admin" });
                cookies.set("psw", this.state.psw, { path: "/admin" });
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </center>
      </Container>
      
    );
  }
}
