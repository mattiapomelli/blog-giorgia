import React, {Component} from 'react'
import { Grid, Menu, Header, Form, Segment, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class Contact extends Component {
    render() {
        return (
            <Container>
            <style>
            {`
            html, body {
                background-color: #EDEAE5 !important;
            }
            `}
            </style>
            <Grid stackable textAlign='center'>
                <Grid.Column style={{ maxWidth: 350 }}>
                <Header as='h2' style={{color:'#556'}} textAlign='center'>Contact Me
                </Header>
                <Form size='large'>
                    <Segment stacked style={{backgroundColor: "#dcbcc9"}}>
                        <Grid centered>
                            <Grid.Row>
                            <Menu style={{backgroundColor: "#c997ac"}}>
                                <Menu.Item icon="instagram">
                                </Menu.Item>
                                <Menu.Item>
                                    @giorgianonsoilcognome
                                </Menu.Item>
                            </Menu>
                            </Grid.Row>
                            <Grid.Row>
                            <Menu style={{backgroundColor: "#c997ac"}}>
                                <Menu.Item icon="mail outline">
                                </Menu.Item>
                                <Menu.Item>
                                    giorgianonsoilcognome@gmail.com
                                </Menu.Item>
                            </Menu>
                            </Grid.Row>
                        </Grid>
                        
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>
            </Container>
            )
    }
}

