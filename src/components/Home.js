import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Card, Container, Pagination, Divider, Input, Button, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const AP = (window.innerWidth > 1224) ? 9 : 6   //ARTICLE PER PAGE

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            activePage: this.props.activePage,
            search: this.props.search
        }

        this.listArticles = this.listArticles.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
        this.cancelSearch = this.cancelSearch.bind(this)
        
    }

    componentDidMount() {
        //console.log("component did mount")
        this.listArticles()
    }

    listArticles() {
        fetch('http://localhost:4000/Blog')
            .then(res => res.json())
            .then(data => {
                //console.log("DATA", data)
                this.setState({articles: data})
                //console.log("STATE", this.state)
            })
            
    }

    handlePageChange = (e, { activePage }) => {     
        this.setState({ activePage })
        document.documentElement.scrollTop = 0

        this.props.rememberPage(activePage)
        
    }

    updateSearch(event) {
        this.props.updateSearch(event)
        //this.setState({search: event.target.value})
        this.setState({activePage: 1})
    }

    cancelSearch(){
        this.props.cancelSearch()
        this.setState({activePage: 1})
    }

    /*render() {
        return (
        <div className="ui stackable link cards" style={{"margin": "130px 4% 4% 4%"}}>
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
    }*/

    render(){
        let filteredArticles = this.state.articles.filter(
            (article) => {
                return article.Titolo.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 || article.Sottotitolo.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
            }
        )
        return(
            <Container>
            <style>
            {`
            html, body {
                background-color: #EDEAE5 !important;
            }
            `}
            </style>
            <Container textAlign="right">
                <Input icon="search" placeholder="Search..." value={this.props.search} onChange={this.updateSearch} color='red'/>
                <Button onClick={this.cancelSearch}><Icon name="cancel"></Icon></Button>
            </Container>
            
            {(filteredArticles.length == 0) && <Container>Nessun Risultato</Container>}
            <Grid stackable columns={3}>
                 {filteredArticles.slice((this.state.activePage-1)*AP, (this.state.activePage-1)*AP + AP).map(article =>
                    <Grid.Column key={article._id}>
                        <Link to={"articolo?id=" + article._id}>
                        <Card key={article._id} style={{backgroundColor: "#c997ac"}}>
                            <Image src={article.Immagine} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>{article.Titolo}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{article.Data.slice(0, 10)}</span>
                            </Card.Meta>
                            <Card.Description>
                                {article.Sottotitolo}
                            </Card.Description>
                            </Card.Content>
                        </Card>
                        </Link>
                    </Grid.Column>
                    )}
            </Grid>
            {/* </Card.Group> */}
            <Divider></Divider>
            <Pagination
                activePage = {this.state.activePage}
                onPageChange={this.handlePageChange}
                boundaryRange={0}
                siblingRange= {2}
                ellipsisItem = {null}
                firstItem={null}
                lastItem={null}
                size={(window.innerWidth > 1224) ? "large" : "mini"}
                totalPages={Math.ceil(filteredArticles.length / AP)}
                style={{backgroundColor: "#d4abbc"}}
            />
            </Container>


        )
    }
}

