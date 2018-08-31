import React from 'react';
import CallToAction from '../components/call-to-action';
import Header from '../components/header';
import Services from '../components/services';
import { Container, Row, Col, Button } from 'reactstrap';

const IndexPage = () => (
    <div>
        {/* Custom Hero Section */}
        <section className="hero-wrapper mb-5">
            <Header />
            <Container>
                <Row>
                    <Col className="col-sm-4">
                        <h3>The perfect 50/50 split</h3>
                        <h1>
                            Designers &amp; <br />
                            Web Developers
                        </h1>
                        <div>
                            <Button outline color="primary">
                                Let's Talk
                            </Button>
                            <Button color="link">More About Us</Button>
                        </div>
                    </Col>
                    <Col className="col-sm-8 text-center">
                        <p>Hero image goes Here</p>
                    </Col>
                </Row>
            </Container>
        </section>
        <Container>
            <Row>
                <Col className="col-12 col-md-6">
                    <h2>
                        Great designers
                        <br />
                        <span>and developers</span>
                    </h2>
                    <p>
                        Stop wasting time looking for designers and web
                        developers. Our team is comprised of creative
                        professionals who can do both, so rest assured your next
                        idea can be brought to life.
                    </p>
                    <Button color="primary">The Services</Button>
                </Col>
                <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <p>Image holder</p>
                </Col>
            </Row>

            <Row>
                <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <p>Image holder</p>
                </Col>
                <Col className="col-12 col-md-6">
                    <h2>
                        Our Story
                        <br />
                        <span>blah blah blah</span>
                    </h2>
                    <p>
                        EadsGraphic was started back in the summer of 2012 by my
                        brother and I. We had an interest in creating a mobile
                        iOS game “SkyDrop!” so we decided to teach ourselves the
                        skills necessary to build the app. Long story short we
                        both still like design and development.
                    </p>
                    <Button color="primary">The Story</Button>
                </Col>
            </Row>

            <Row>
                <Col className="col-12 col-md-6">
                    <h2>
                        Skills and
                        <br />
                        <span>Experience</span>
                    </h2>
                    <p>
                        Our main skill set involves UI/UX design and front end
                        web development wheter it be ReactJs™ or CMS platforms
                        such as Wordpress™. We pride ourselves on connecting
                        users to applications.
                    </p>
                    <Button color="primary">The Resume</Button>
                </Col>
                <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <p>Image holder</p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="col-12 text-center">
                    <h2>Our Services</h2>
                    <h5 className="section-description m-auto">
                        Our team of creative professionals have a wealth of
                        design knowledge and technical skills that we are able
                        to pass on to our clients
                    </h5>
                </Col>
            </Row>
            <Services />
            <CallToAction />
        </Container>
    </div>
);

export default IndexPage;
