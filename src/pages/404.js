import React from 'react';
import Helmet from 'react-helmet';
import HeaderAlt from '../components/headeralt';
import { Container, Row, Col } from 'reactstrap';

const NotFoundPage = () => (
    <Container>
        <section>
            {/* SEO MetaData */}
            <Helmet
                title={`EadsGraphic | 404`}
                meta={[
                    { name: 'description', content: 'About Sample' },
                    { name: 'keywords', content: 'About description' },
                ]}
            />

            <HeaderAlt />

            <Row>
                <Col className="col-6">
                    <h1>404</h1>
                </Col>
            </Row>
        </section>
    </Container>
);

export default NotFoundPage;
