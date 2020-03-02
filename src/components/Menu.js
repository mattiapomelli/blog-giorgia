import React from 'react'
import { Menu } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {color: '#ffffff', backgroundColor: '#7cbdbf'}
  else
    return {color: '#ffffff'}
}
const MenuBar = withRouter(({history}) => (

  <Menu stackable size='huge' className="ui top fixed menu" style={{backgroundColor: '#87D1D4', textAlign: 'center'}}>
        <Link to="/" >
            <Menu.Item
            style={isActive(history, "/")}>
                BLOG Giorgia!
            </Menu.Item>
        </Link>
        <Link to="/about">
            <Menu.Item
                name='about'
                style={isActive(history, "/about")}
                active={isActive === 'about'}
            >
            About
            </Menu.Item>
        </Link>
        <Link to="/contact">
            <Menu.Item
                name='contact'
                style={isActive(history, "/contact")}
                active={isActive === 'contact'}
            >
            Contact
             </Menu.Item>
        </Link>
</Menu>

        // <Link to="/admin">
        //     <Button style={isActive(history, "/admin")}>Admin</Button>
        // </Link>

))

export default MenuBar