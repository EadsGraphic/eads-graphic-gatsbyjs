import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import ContactForm from '../components/contact-form';

const ContactPage = () => (
    <Container>
        {/* SEO MetaData */}
        <Helmet
            title={`EadsGraphic | Contact`}
            meta={[
                { name: 'description', content: 'About Sample' },
                { name: 'keywords', content: 'About description' },
            ]}
        />

    
        <Row>
            <Col className="col-6">
                <h1>Contact</h1>
            </Col>
        </Row>

        <ContactForm />
    </Container>
);

export default ContactPage;
