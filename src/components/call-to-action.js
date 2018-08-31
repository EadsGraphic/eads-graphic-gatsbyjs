import React from 'react';
import { Row, Col, Button } from 'reactstrap';

class CallToAction extends React.Component {
    render() {
        return (
            <section id="call-to-action p-5">
                <Row className="text-center">
                    <Col>
                        <h2>Let’s Start Your Next Project</h2>
                        <h3>
                            We love hearing new ideas, so let's set up some time
                            to talk.
                        </h3>
                        <Button className="mt-4" color="outline-primary">
                            Contact Us
                        </Button>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default CallToAction;
