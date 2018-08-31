import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const NotFoundPage = () => (
    <section>
        <Container>
            <Row>
                <Col>
                    <h1>404 Not Found</h1>
                    <p>Sorry, the page you are looking for does not exist.</p>
                </Col>
            </Row>
        </Container>
    </section>
);

export default NotFoundPage;
