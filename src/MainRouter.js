import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Nav from './components/Nav'
import Article from './components/Article'
import './index.css'



export default class MainRouter extends Component {


    constructor() {
        super()
        this.state = {
            articles: [],
            activePage: 1
        }

        this.rememberPage = this.rememberPage.bind(this)
    }

    componentDidUpdate() {
        let el = document.getElementById("nav")
        //console.log(el.offsetHeight)
    }

    rememberPage(page) {
        this.setState({activePage: page})  
    }

    render() {
        return (<div>
            <nav><Nav /></nav>
            <div className="main" id="main">
            <Switch>
                <Route exact path="/" render={() => <Home activePage={this.state.activePage} rememberPage={this.rememberPage}/>}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/articolo" component={Article}/>
            </Switch>
            </div>
        </div>)
    }
}