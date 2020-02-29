import React, {Component} from 'react'

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
        <div class="ui link cards">
            {
                this.state.articles.map(article => {
                    return (
                            <div class="card" key={article._id}>
                                <div class="image">
                                    <img src={article.Immagine}></img>
                                </div>
                                <div class="content">
                                    <a class="header">{article.Titolo}</a>
                                    <div class="meta">
                                    <span class="date">2/29/2020</span>
                                    </div>
                                    <div class="description">
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

