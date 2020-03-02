import React, {Component} from 'react'
import { Button, Form,Grid,Container,Card,Image } from 'semantic-ui-react'
import axios from 'axios'


export default class Admin extends Component {
    constructor(props){
        super(props);
        this.state={
            utente:"",
            psw:"",
            show:false,
            data:[]
        }
    } 

    handleChange(e) {
        // If you are using babel, you can use ES 6 dictionary syntax
         let change = { [e.target.name] : e.target.value }
        this.setState(change)
      }

  handleSubmit(event) {
    if ( this.state.psw === process.env.REACT_APP_PSW && this.state.utente === "Giorgia" && this.state.show === false){
        this.setState({show:true});
        axios.get("http://localhost:4000/Blog/")
        .then(x=>{
            this.setState({data:x.data})
        })
        .catch(x=>{

        })
    }
    console.log(this.state.data);
  }

    render() {
     return (
        this.state.psw === process.env.REACT_APP_PSW && this.state.utente === "Giorgia" && this.state.show === true  ?
<Container style={{ marginTop: '7em'}}>
            <style>
            {`
            html, body {
                background-color: #f6f6f6 !important;
            }
            `}
            </style>
            {/* <Card.Group itemsPerRow={3} doubling> */}
            <Grid stackable columns={3}>
                 {this.state.data.map(article =>
                    <Grid.Column key={article._id}>
                        <Card key={article._id} href={`/articolo?id=`+article._id}>
                            <Image src={article.Immagine} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>{article.Titolo}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{article.Data}</span>
                            </Card.Meta>
                            <Card.Description>
                                {article.Sottotitolo}
                            </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    )}
            </Grid>
            {/* </Card.Group> */}
            </Container>

        :
        <center>
        <div>
        <Form size="large" onSubmit={this.handleSubmit.bind(this)}>
            <Form.Field>
                <label>Utente</label>
                <input placeholder='Utente' name="utente" value={this.state.utente} onChange={this.handleChange.bind(this)} />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" value={this.state.psw} name="psw" onChange={this.handleChange.bind(this)} />
            </Form.Field>
            <Button positive type='submit'>Submit</Button>
        </Form>

        </div>
        </center> 
        
        )

    }
}




