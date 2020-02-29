import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            articles: []
        }

        this.listArticles = this.listArticles.bind(this)
    }

    componentDidMount() {
        console.log("component did mount")
        this.listArticles()
    }

    listArticles() {
        fetch('http://localhost:4000/Blog')
            .then(res => res.json())
            .then(data => {
                console.log("DATA", data)
                this.setState({articles: data})
                console.log("STATE", this.state)
            })
            
    }

    render() {
        return (
        <div className="ui stackable link cards" style={{"margin": "4%"}}>
            {
                this.state.articles.map(article => {
                    return (
                            <div className="card" key={article._id} style={{"margin": "1.6%"}}>
                                <div className="image">
                                    <img src={article.Immagine}></img>
                                </div>
                                <div className="content">
                                    <a className="header">{article.Titolo}</a>
                                    <div className="meta">
                                    <span className="date">2/29/2020</span>
                                    </div>
                                    <div className="description">
                                        {article.Testo}
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
        </div>)
    }
}

