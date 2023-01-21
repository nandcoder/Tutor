import React, { useState } from 'react';
import { Accordion, Container, Modal, Form, Button } from 'react-bootstrap';

const initialData = {
    name: '',
    email: '',
    query: '',
}
const Contact = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(initialData)
    const [modalHead, setModalHead] = useState('')
    const [modalText, setModalText] = useState('')
    const handleSubmit = () => {
        const body = new FormData();
        body.append("name", data.name);
        body.append("email", data.email);
        body.append("query", data.query);
        const URL = `https://reqres.in/api/users`;
        fetch(URL, {

            method: 'POST',
            mode: 'cors',
            body: body

        }).then((res) => {
            if (res.status >= 400) {
                setModalHead("ERROR !!!")
                setModalText("Please check the data again or try after sometime")
            } else {
                setModalHead("SUCCESS")
                setModalText("We have received your query. You will receive a response soon.")
            }
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setShow(true)
            setData(initialData)
        })



    }
    const handleClose = () => {
        setShow(false);
        setModalHead('')
        setModalText('')
    }


    return (
        <Container fluid>
            <Form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
            }}>
                <Accordion className='mb-5 mt-5' defaultActiveKey="0" alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Name</Accordion.Header>
                        <Accordion.Body>
                            <Form.Control onChange={(e) => setData({ ...data, name: e.currentTarget.value })} name='name' type="name" placeholder="Enter full name" />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Email</Accordion.Header>
                        <Accordion.Body>
                            <Form.Control onChange={(e) => setData({ ...data, email: e.currentTarget.value })} name='email' type="email" placeholder="Enter email" />

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Question</Accordion.Header>
                        <Accordion.Body>
                            <Form.Control onChange={(e) => setData({ ...data, query: e.currentTarget.value })} name='query' as="textarea" rows={3} placeholder="Ask your question" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalHead}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
}

export default Contact;
