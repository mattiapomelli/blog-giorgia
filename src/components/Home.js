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
        <div>
            {
                this.state.articles.map(article => {
                    return (
                        <div key={article._id}>
                            <h1>{article.Titolo}</h1>
                            <h2>{article.Testo}</h2>
                        </div>
                    )
                })
            }
        </div>)

    }
}

