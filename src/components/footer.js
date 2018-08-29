import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col className="col-3">.col 1</Col>
                    <Col className="col-3">.col 2</Col>
                    <Col className="col-3">.col 3</Col>
                    <Col className="col-3">.col 4</Col>
                </Row>
                <Row>
                    <Col className="col text-center">
                        <p>
                            &copy;
                            {new Date().getFullYear()}{' '}
                            <Link to="/">EadsGraphic</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;
