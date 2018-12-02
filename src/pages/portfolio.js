import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

const PortfolioPage = () => (
    <Container>
        <section>
            {/* SEO MetaData */}
            <Helmet
                title={`EadsGraphic | Portfolio`}
                meta={[
                    { name: 'description', content: 'About Sample' },
                    { name: 'keywords', content: 'About description' },
                ]}
            />

   

            <Row>
                <Col className="col-6">
                    <h1>Portfolio</h1>
                </Col>
            </Row>
        </section>
    </Container>
);

export default PortfolioPage;
