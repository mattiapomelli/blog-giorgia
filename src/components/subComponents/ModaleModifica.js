import React from "react";
import { Modal, Image, Form, Button, Icon, TextArea } from "semantic-ui-react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export default class ModaleModifica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Titolo: this.props.articolo.Titolo,
      Sottotitolo: this.props.articolo.Sottotitolo,
      Immagine: this.props.articolo.Immagine,
      Testo: this.props.articolo.Testo
    };
  }

  update() {
    axios
      .post(
        "http://localhost:4000/Blog/update/" + this.props.articolo._id,
        {
          Titolo: this.state.Titolo,
          Sottotitolo: this.state.Sottotitolo,
          Immagine: this.state.Immagine,
          Testo: this.state.Testo
        },
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY
          }
        }
      )
      .then(x => {
        alert("Modificato");
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
        <Modal.Header>{this.props.articolo.Titolo}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={this.state.Immagine} />
          <Modal.Description>
            <Form style={{ width: "30em" }}>
              <Form.Input
                fluid
                label="Titolo"
                value={this.state.Titolo}
                error={this.state.Titolo.length === 0}
                name="Titolo"
                onChange={this.handleChange.bind(this)}
              />
              <Form.Input
                fluid
                label="Link immagine"
                value={this.state.Immagine}
                error={this.state.Immagine.length === 0}
                name="Immagine"
                onChange={this.handleChange.bind(this)}
              />

              <Form.TextArea
                label="Sottotitlo"
                name="Sottotitolo"
                style={{ minWidth: "90%" }}
                control={TextArea}
                error={this.state.Sottotitolo.length === 0}
                value={this.state.Sottotitolo}
                onChange={this.handleChange.bind(this)}
              ></Form.TextArea>
              <Form.TextArea
                label="Testo"
                name="Testo"
                control={TextArea}
                error={this.state.Testo.length === 0}
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
          <Button positive onClick={this.update.bind(this)}>
            <Icon name="checkmark" /> Modifica
          </Button>
        </Modal.Actions>
      </>
    );
  }
}
