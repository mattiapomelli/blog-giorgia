import React from 'react'
import {Modal,Image,Header,Button,Icon} from 'semantic-ui-react'


export default class ModaleModifica extends React.Component{
    render(){
        return(
            <>
        <Modal.Header>{this.props.articolo.Titolo}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={this.props.articolo.Immagine} />
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>
                    {this.props.articolo._id}
                </p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
              <Button color='grey' onClick={this.props.close}>
        <Icon name='checkmark' /> Annulla
      </Button>
            </Modal.Content>
            </>
        )
    }

}