import React from 'react'
import axios from 'axios'
import dotenv from'dotenv'
import {Modal,Form,TextArea,Button,Icon} from 'semantic-ui-react'

dotenv.config();

var utc = new Date().toISOString()

export default class ModaleCrea extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Titolo: "",
            Sottotitolo: "",
            Immagine: "",
            Testo: ""
        };
      }
    
      create() {
        axios
          .post(
            "http://localhost:4000/Blog/add/",
            {
                Titolo: this.state.Titolo,
                Sottotitolo: this.state.Sottotitolo,
                Immagine: this.state.Immagine,
                Testo: this.state.Testo,
                Data: utc

            },
            {
              headers: {
                Authorization: process.env.REACT_APP_API_KEY
              }
            }
          )
          .then(x => {
            console.log("Creato, SS:",x.status);
            window.location.reload(true);
          });
      }
    
      handleChange(e) {
        // If you are using babel, you can use ES 6 dictionary syntax
        let change = {
          [e.target.name]: e.target.value
        };
        this.setState(change);
      }
      render() {
        return (
          <>
            <Modal.Header>Aggiungi nuovo articolo</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form style={{ width: "30em" }}>
                  <Form.Input
                    fluid
                    label="Titolo"
                    value={this.state.Titolo}
                    name="Titolo"
                    onChange={this.handleChange.bind(this)}
                  />
                  <Form.Input
                    fluid
                    label="Link immagine"
                    value={this.state.Immagine}
                    name="Immagine"
                    onChange={this.handleChange.bind(this)}
                  />
    
                  <Form.TextArea
                    label="Sottotitlo"
                    name="Sottotitolo"
                    style={{ minWidth: "90%" }}
                    control={TextArea}
                    value={this.state.Sottotitolo}
                    onChange={this.handleChange.bind(this)}
                  ></Form.TextArea>
                  <Form.TextArea
                    label="Testo"
                    name="Testo"
                    control={TextArea}
                    value={this.state.Testo}
                    onChange={this.handleChange.bind(this)}
                  ></Form.TextArea>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color="grey" onClick={this.props.close}>
                <Icon name="delete" /> Annulla
              </Button>
              <Button positive onClick={this.create.bind(this)}>
                <Icon name="checkmark" /> Crea nuovo articolo
              </Button>
            </Modal.Actions>
          </>
        );
      }
    }
    