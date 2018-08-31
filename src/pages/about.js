import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from 'react-helmet';
import HeaderAlt from '../components/headeralt';
import CodeResumeImage from '../assets/images/code-resume.png';

const AboutPage = () => (
    <section>
        {/* SEO MetaData */}
        <Helmet
            title={`EadsGraphic | About Us`}
            meta={[
                { name: 'description', content: 'About Sample' },
                { name: 'keywords', content: 'About description' },
            ]}
        />

        <HeaderAlt />
        <Container>
            <Row>
                <Col className="col-6">
                    <h1>About</h1>
                </Col>
                <Col className="col-12 text-center">
                    <img
                        className="img-fluid code-resume"
                        src={CodeResumeImage}
                        alt="EadsGraphic resume"
                    />
                </Col>
            </Row>
        </Container>
    </section>
);

export default AboutPage;
