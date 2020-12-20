import React from 'react';
import Intro from '../assets/img/intro.mp4'
import SideVideo from '../assets/img/home.mp4'
import { Grid, Button, Container, Modal } from 'semantic-ui-react'
import ContactModal from './ContactModal';
import Loader from './Loader'

class Home extends React.Component {
    state = {
        messageModalVisible: false,
        open: false,
        show: false
    }

    showVisibleLoader = (show) => {
        this.setLoader(show)
    }

    setLoader = (show) => {
        this.setState({ show: show })
    }

    handleClickMessage = () => {
        this.setMessageModalVisible(true);
    }

    setMessageModalVisible = (open) => {
        this.setState({ messageModalVisible: open })
    }

    handleSendMessage = (name, email, subject, message) => {
        const templateId = 'template_9qren7h';

        this.sendFeedback(templateId, { message: message, from_name: name, subject: subject, sender: email });
        this.setMessageModalVisible(false);
    }

    setOpen = (open) => {
        this.setState({ open: open })
    }

    showSuccessMessage = () => {
        this.setOpen(true)
    }

    sendFeedback(templateId, variables) {
        this.showVisibleLoader(true)
        window.emailjs.send(
            'service_09fvgic', templateId,
            variables
        ).then(res => {
            this.showSuccessMessage()
            this.showVisibleLoader(false)
        })
            // Handle errors here however you like, or use a React error boundary
            .catch((err) => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err),
            this.showSuccessMessage(),
            this.showVisibleLoader(false)
            )
    }

    render() {

        const { messageModalVisible, show } = this.state;
        return (
            <Container>
                <div style={{ color: 'white', display: 'flex' }}>
                    <Loader visible={show} />
                    <Modal
                        centered={false}
                        open={this.state.open}
                        onClose={() => this.setOpen(false)}
                        onOpen={() => this.setOpen(true)}
                        size='mini'
                        basic
                    >
                        <Modal.Header>Thank you! Your Message was sent successfuly!</Modal.Header>
                        <Modal.Actions>
                            <Button inverted color='teal' onClick={() => this.setOpen(false)}>OK</Button>
                        </Modal.Actions>
                    </Modal>
                    <ContactModal
                        open={messageModalVisible}
                        setOpen={this.setMessageModalVisible}
                        submit={this.handleSendMessage}
                    />
                    <Grid columns={2} style={{ background: 'black' }}>
                        <Grid.Column >
                            <h1 style={{ marginLeft: '10px' }}>
                                <video src={Intro} autoPlay muted width="500" height="350" />
                            </h1>
                            <h2 style={{ marginBottom: '110px' }}>
                                Do you like my work  ?
                            <Button style={{ marginLeft: '10px', marginRight: '10px' }} inverted color='teal' onClick={() => this.handleClickMessage(true)}>
                                    <h5 style={{ color: '#FF69B4' }}>Contact me!</h5>
                                </Button>
                            :
                            <Button style={{ marginLeft: '10px' }} inverted color='teal' onClick={() => this.handleClickMessage(true)}>
                                    <h5 style={{ color: '#FF69B4' }}>Make a suggestion</h5>
                                </Button>
                            </h2>
                        </Grid.Column>
                        <Grid.Column >
                            <video src={SideVideo} muted autoPlay loop width="650" height="500" />
                        </Grid.Column>
                    </Grid>
                </div>
            </Container>
        )
    }
}

export default Home;
