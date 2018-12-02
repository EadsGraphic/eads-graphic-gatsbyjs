import React from 'react';
import CallToAction from '../components/call-to-action';

import Services from '../components/services';
import Typed from 'react-typed';
import { Container, Row, Col, Button } from 'reactstrap';
import socialData from '../data/social-info.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IndexPage = () => (
    <div>
        <section id="intro" className="hero">
            <Container>
                <Row className="text-center mx-auto">
                    <Col xs={12}>
                        <h5>Hello, World</h5>
                        <h1>We Are</h1>
                        <h1>
                            <Typed
                                strings={[
                                    ' EadsGraphic',
                                    ' Designers',
                                    ' Developers',
                                    ' Analysts',
                                ]}
                                loop={true}
                                typeSpeed={40}
                            />
                        </h1>
                    </Col>
                    <Col xs={12} className="mt-4">
                        <Button
                            className="btn-round hero-btn mr-2"
                            color="primary"
                        >
                            More Info
                        </Button>
                        <Button outline color="primary" className="btn-round">
                            Contact Us
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <ul className="list-unstyled intro-social">
                            <li className="p-3">
                                <a id="be" href="#" alt="EadsGraphic Facebbok">
                                    <i className="fab fa-behance" />
                                </a>
                            </li>

                            <li className="p-3">
                                <a id="yt" href="#" alt="EadsGraphic Youtube">
                                    <i className="fab fa-youtube" />
                                </a>
                            </li>

                            <li className="p-3">
                                <a id="ig" href="#" alt="EadsGraphic Instagram">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li className="p-3">
                                <a
                                    id="db"
                                    href="#"
                                    alt="EadsGraphic Dribbble Profile"
                                >
                                    <i className="fab fa-dribbble" />
                                </a>
                            </li>
                            <li className="p-3">
                                <a id="gh" href="#" alt="EadsGraphic GitHub">
                                    <i className="fab fa-github" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>

        <section id="about" className="py-5">
            <Container>
                <Row className="section-intro text-center">
                    <Col>
                        <h5>About</h5>
                        <h1>Let us introduce ourselves.</h1>

                        <div class="intro-info">
                            <p>
                                Lorem ipsum Exercitation culpa qui dolor
                                consequat exercitation fugiat laborum ex ea
                                eiusmod ad do aliqua occaecat nisi ad irure sunt
                                id pariatur Duis laboris amet exercitation
                                veniam labore consectetur ea id quis eiusmod.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button color="primary" outline className="btn-round">
                        More About
                    </Button>
                    </Col>
                </Row>
            </Container>
        </section>

        <Container className="pt-5">
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
