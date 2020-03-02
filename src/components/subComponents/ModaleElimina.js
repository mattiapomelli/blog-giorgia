import React from 'react'
import {Modal,Header,Button,Icon} from 'semantic-ui-react'
import axios from 'axios'
const dotenv = require("dotenv");
dotenv.config();

export default class ModaleElimina extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    delete = () => {
        axios.delete('http://localhost:4000/Blog/delete/'+this.props.articolo._id,{
            headers:{
                Authorization: process.env.REACT_APP_API_KEY
            },
            data:{}
        }).then(x=> {alert('ELIMINATO');window.location.reload(true)})
    }

    render(){

        return(
<>
<Header icon='archive' content='Archive Old Messages' />

    <Modal.Content>
      <p>
            {process.env.REACT_APP_API_KEY}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red' onClick={this.delete}>
        <Icon name='remove' /> Elimina
      </Button>
      <Button color='grey' onClick={this.props.close}>
        <Icon name='checkmark' /> Annulla
      </Button>
    </Modal.Actions>
    </>
        )
    }
}

