import React from "react";
import axios from "axios";
import {Container,Image} from 'semantic-ui-react';
import "./subComponents/article.css";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      text: "",
      image: "",
      subtitle:""
    };
  }
  

  componentDidMount() {
    const search = window.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const id = params.get("id"); // bar
    axios
      .get("http://localhost:4000/Blog/" + id)
      .then(x => {
        this.setState({
          title: x.data.Titolo,
          date: x.data.Data,
          text: x.data.Testo,
          image: x.data.Immagine,
          subtitle:x.data.Sottotitolo
        });
      })
      .catch(x => {
        alert("errore");
      });
  }

  render() {
    return (
        <Container>
            <h1 className="title">{this.state.title}</h1>
            <h2 className="sub">{this.state.subtitle}</h2>
            <Image style={{marginTop:"3em",marginBottom:"3em"}}  size="big" src={this.state.image} fluid></Image>
            <hr style={{marginTop:"3em",marginBottom:"3em"}}></hr>
            <p className="text">{this.state.text}</p>
        </Container>
    );
  }
}
