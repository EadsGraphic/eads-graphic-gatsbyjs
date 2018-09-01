import React from 'react';
import { Row, Col, Button } from 'reactstrap';

class CallToAction extends React.Component {
    render() {
        return (
            <section id="call-to-action" className="pb-12">
                <Row className="text-center">
                    <Col>
                        <h2 className="cta-h2">Your Idea, Our Job</h2>
                        <p>We love hearing ideas, let's set up time to talk.</p>
                        <Button color="primary">Contact Us</Button>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default CallToAction;
