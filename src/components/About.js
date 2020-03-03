import React, {Component} from 'react'
import { Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class About extends Component {

    render() {
        return (
        <div style={{position: "relative"}}>
            <Image src='https://images.freeimages.com/images/premium/previews/2235/22355478-venice-giudecca-canal-landmark-panoramic-long-exposure-photogr.jpg' fluid />
            <Header as='h1' style={{position: "absolute", top: "8px", color: "white"}}>GIORGIA</Header>
        </div>)

    }
}