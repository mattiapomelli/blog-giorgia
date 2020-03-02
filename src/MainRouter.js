import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Nav from './components/Nav'
import Article from './components/Article'
import { Divider, Container } from 'semantic-ui-react'
import './index.css'


export default class MainRouter extends Component {


  render() {
    return (<div>
        <nav><Nav /></nav>
        <div className="main">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/articolo" component={Article}/>
        </Switch>
        </div>
    </div>)
  }
}