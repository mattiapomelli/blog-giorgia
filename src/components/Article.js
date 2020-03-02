import React from 'react'
import axios from 'axios'

export default class Article extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            date:"",
            text:"",
            image:""
    }
    }



    componentDidMount(){
        const search = window.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const id = params.get('id'); // bar
        axios.get("http://localhost:4000/Blog/"+id)
        .then(x=>{
            this.setState({
                title:x.data.Titolo,
                date:x.data.Data,
                text:x.data.Testo,
                image:x.data.Immagine })
        })
        .catch(x=>{
            alert("errore")
        })
    }
    
    render(){
        return(
        <div>
           
            <h1>{this.state.title}</h1>
            <hr></hr>
            <h3>{this.state.subtitle}</h3>
            <p>{this.state.text}</p>
            <hr></hr>
            <p>{this.state.date}</p>
        </div>
        )
    }


}