import React from 'react';
import { Row, Col, Button } from 'reactstrap';

class CallToAction extends React.Component {
    render() {
        return (
            <section id="call-to-action">
                <Row className="text-center">
                    <Col>
                        <h2>Let’s Start Your Next Project</h2>
                        <h3>
                            Contact us today to get started on your next big
                            idea!
                        </h3>
                        <Button color="primary">Contact Us</Button>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default CallToAction;
