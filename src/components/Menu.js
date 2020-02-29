import React from 'react'
import { Menu } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {color: '#ff4081'}
  else
    return {color: '#000000'}
}
const MenuBar = withRouter(({history}) => (

  <Menu stackable className="ui fixed menu">
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