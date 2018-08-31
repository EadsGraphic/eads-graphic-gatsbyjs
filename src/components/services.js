import React from 'react';
import { Row, Col } from 'reactstrap';

class Services extends React.Component {
    render() {
        return (
            <section id="services">
                <Row>
                    <Col className="service-item col-12">
                        <Row>
                            <Col>
                                <h3>Brand &amp; Identity</h3>
                                <p>
                                    Let’s unite all of your project’s current
                                    themes and styles into one concise brandng
                                    styleguide. This will allow you to portray a
                                    consistent brand image moving forward.
                                </p>
                            </Col>
                            <Col>
                                <p>Image Holder</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="service-item col-12">
                        <Row>
                            <Col>
                                <h3>Print &amp; Graphic Design</h3>
                                <p>
                                    Allow our digital artists to bring your
                                    ideas to life using professional photo
                                    manipulation and retouching skills that will
                                    surely catch peoples attention.
                                </p>
                            </Col>
                            <Col>
                                <p>Image Holder</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="service-item col-12">
                        <Row>
                            <Col>
                                <h3>Web Development</h3>
                                <p>
                                    Solidify your online presence by building an
                                    entirely custom and responsive website that
                                    will allow you to engage with your customers
                                    in a whole new way.
                                </p>
                            </Col>
                            <Col>
                                <p>Image Holder</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="service-item col-12">
                        <Row>
                            <Col>
                                <h3>Digital Marketing</h3>
                                <p>
                                    Still don’t love social media? Well let us
                                    change your mind by driving in mass amounts
                                    of customer engagement through custom
                                    tailored social media campaigns.
                                </p>
                            </Col>
                            <Col>
                                <p>Image Holder</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="service-item col-12">
                        <Row>
                            <Col>
                                <h3>Video Production</h3>
                                <p>
                                    Dad still have GoPro™ footage from last
                                    years vacation?Well, let us use professional
                                    grade video software to turn it into a
                                    cinematic movie to enjoy for years to come.
                                </p>
                            </Col>
                            <Col>
                                <p>Image Holder</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="service-item col-12">
                        <Row>
                            <Col>
                                <h3>UI/UX Design</h3>
                                <p>
                                    Bring your next digital project to life by
                                    taking advantage of our in house UI/UX
                                    designers who will connect audiences to
                                    applications.
                                </p>
                            </Col>
                            <Col>
                                <p>Image Holder</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Services;
