import React, { useState } from 'react';
import { Modal, Form, Button, Icon } from 'semantic-ui-react';

const Contact = ({ open, setOpen, submit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e, { name, value }) => {
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'subject') {
            setSubject(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    }

    const close = () => {
        setOpen(false);
    }

    const submitClicked = () => {
        var result = submit(name, email, subject, message);
    }

    return (
        <Modal basic open={open} onClose={close}>
            <Modal.Header icon>
                <Icon name='mail' />
                Send Onkar a message
            </Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Group>
                        <Form.Input placeholder='Name' name='name' width={8} onChange={handleInputChange} />
                        <Form.Input placeholder='Email' name='email' width={8} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Input placeholder='Subject' name='subject' onChange={handleInputChange} />
                    <Form.TextArea placeholder='Message' name='message' onChange={handleInputChange} />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    onClick={close}
                    inverted color='teal'
                >
                    <h5 style={{ color: '#FF69B4' }}>Close</h5>
                </Button>
                <Button
                    inverted color='teal'
                    onClick={submitClicked}
                >
                    <h5 style={{ color: '#FF69B4' }}>Submit</h5>
                </Button>
            </Modal.Actions>
        </Modal>
    )
}
export default Contact;