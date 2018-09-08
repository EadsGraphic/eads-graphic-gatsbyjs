import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends React.Component {
    render() {
        return (
            <section id="call-to-action" className="pb-12">
                <Row>
                    <Col className="col-10 col-sm-10 col-md-8 mx-auto">
                        <form name="contact" method="POST" netlify>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="phone">Phone</Label>
                                <Input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleText">Message</Label>
                                <Input
                                    type="textarea"
                                    name="text"
                                    id="exampleText"
                                />
                            </FormGroup>

                            <Button type="submit">Submit</Button>
                        </form>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default ContactForm;
