import React from "react";
import axios from "axios";
import {Container,Image, Button} from 'semantic-ui-react';
import "./subComponents/article.css";
import { Link } from "react-router-dom";

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
    document.documentElement.scrollTop = 0
    const search = window.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const id = params.get("id"); // bar
    axios
      .get("http://2.238.196.146:4000/Blog/" + id)
      .then(x => {
        this.setState({
          title: x.data.Titolo,
          date: x.data.Data.slice(0, 10),
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
            <style>
            {`
            html, body {
                background-color: #EDEAE5 !important;
            }

            @media only screen and (min-width: 600px) {
                .back-button {
                    display: none
                }
            }
            `}
            </style>
            <Container>
            <Link to='/' className="back-button"><Button>Back</Button></Link>
            </Container>
            <h1 className="title">{this.state.title}</h1>
            <h2 className="sub">{this.state.subtitle}</h2>
            <Image style={{marginTop:"2em",marginBottom:"2em"}}  size="big" src={this.state.image}></Image>
            <p className="text">{this.state.text}</p>
        </Container>
    );
  }
}
