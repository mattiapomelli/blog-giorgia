import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Admin from './components/Admin'
import Menu from './components/Menu'
import { Divider, Container } from 'semantic-ui-react'



export default class MainRouter extends Component {


  render() {
    return (<div>
        <Container><Menu/></Container>
        <Divider />
        <Divider />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/admin" component={Admin}/>
        </Switch>
    </div>)
  }
}