import React from 'react'
import {Modal,Header,Button,Icon} from 'semantic-ui-react'




export default class ModaleElimina extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
    render(){

        return(
<>
<Header icon='archive' content='Archive Old Messages' />

    <Modal.Content>
      <p>
            {this.props.articolo._id}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
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

