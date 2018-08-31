import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <footer className="p-5">
                <Container>
                    <Row>
                        <Col className="col-12 col-sm-3">
                            {/* Mission Statement */}
                            <p>
                                EadsGraphic strives to deliver one of a kind
                                creative services to clients of all sizes. We
                                pride oursleves on providing our clients with
                                top not creative services ranging from graphic
                                desing to web development.
                            </p>
                        </Col>
                        <Col className="col-6 col-sm-3">
                            <h4 className="mb-3">Services</h4>

                            <ul className="list-unstyled">
                                <li>
                                    <Link>Service</Link>
                                </li>
                                <li>
                                    <Link>Service</Link>
                                </li>
                                <li>
                                    <Link>Service</Link>
                                </li>
                                <li>
                                    <Link>Service</Link>
                                </li>
                                <li>
                                    <Link>Service</Link>
                                </li>
                            </ul>
                        </Col>

                        <Col className="col-6 col-sm-3">
                            <h4 className="mb-3">Our Site</h4>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="contact">Contact</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col className="col-12 col-sm-3">
                            <h4>Get Social</h4>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="col-12 text-center">
                            <p className="copyright">
                                &copy;
                                {new Date().getFullYear()}{' '}
                                <Link to="/">EadsGraphic. </Link>
                                All Rights Reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;
