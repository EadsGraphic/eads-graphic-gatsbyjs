import React from 'react';
import CallToAction from '../components/call-to-action';
import Header from '../components/header';
import Services from '../components/services';
import Typed from 'react-typed';
import { Container, Row, Col, Button } from 'reactstrap';
import { socialData } from '../data/social-info.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const IndexPage = () => (
    <div>
        <section id="intro" className="hero">
            <Header />
            <Container>
                <Row className="text-center mx-auto">
                    <Col>
                        <h5>Hello, World</h5>
                        <h1>
                            <span>We Are </span>
                            <Typed
                                strings={[
                                    ' EadsGraphic',
                                    ' Designers',
                                    ' Developers',
                                    ' Analysts',
                                ]}
                                loop={true}
                                loopCount={5}
                                typeSpeed={40}
                            />
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">
                                Facebook
                                    <i className="fab fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-behance" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-dribbble" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-instagram" />
                                    <FontAwesomeIcon icon="stroopwafel" />
                                </a>
                            </li>
                        </ul>
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
                        Stop looking for a designer and a web developer. Why not
                        get 2 for the price of 1? Our team is comprised of
                        creative professionals who can do both, so rest assured
                        your next idea can be brought to life.
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
                        Our team has a wealth of design and development skills
                        that we can share with our clients
                    </h5>
                </Col>
            </Row>
            <Services />
        </Container>
        <CallToAction />
    </div>
);

export default IndexPage;
