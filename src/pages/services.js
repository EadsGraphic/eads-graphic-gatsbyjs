import React from 'react';
import Helmet from 'react-helmet';
import HeaderAlt from '../components/headeralt';
import { Container, Row, Col } from 'reactstrap';

const ServicesPage = () => (
    <Container>
        <section>
            {/* SEO MetaData */}
            <Helmet
                title={`EadsGraphic | Services`}
                meta={[
                    { name: 'description', content: 'About Sample' },
                    { name: 'keywords', content: 'About description' },
                ]}
            />

            <HeaderAlt />

            <Row>
                <Col className="col-6">
                    <h1>Services</h1>
                </Col>
            </Row>
        </section>
    </Container>
);

export default ServicesPage;
