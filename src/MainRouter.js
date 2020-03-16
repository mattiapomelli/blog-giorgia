import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Admin from './components/Admin'
import Nav from './components/Nav'
import Article from './components/Article'
import './index.css'



export default class MainRouter extends Component {


    constructor() {
        super()
        this.state = {
            articles: [],
            activePage: 1,
            adminActivePage: 1,
            search: ''
        }

        this.rememberPage = this.rememberPage.bind(this)
        this.rememberPageAdmin = this.rememberPageAdmin.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
        this.cancelSearch = this.cancelSearch.bind(this)
    }

    componentDidUpdate() {
        //let el = document.getElementById("nav")
        //console.log(el.offsetHeight)
    }

    rememberPage(page) {
        this.setState({activePage: page})  
    }

    rememberPageAdmin(page) {
        this.setState({adminActivePage: page}) 
    }

    updateSearch(event) {
        this.setState({search: event.target.value})
        //this.setState({activePage: 1})
        console.log("update")
    }

    cancelSearch() {
        this.setState({search: ''})
    }

    render() {
        return (<div>
            <nav><Nav /></nav>
            <div className="main" id="main">
            <Switch>
                <Route exact path="/" render={() => <Home activePage={this.state.activePage} rememberPage={this.rememberPage}
                    search={this.state.search} updateSearch={this.updateSearch} cancelSearch={this.cancelSearch}/>}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/admin" render={() => <Admin activePage={this.state.adminActivePage} rememberPage={this.rememberPageAdmin}
                    search={this.state.search} updateSearch={this.updateSearch} cancelSearch={this.cancelSearch}/>}/>
                <Route path="/articolo" component={Article}/>
            </Switch>
            </div>
        </div>)
    }
}