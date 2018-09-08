import React from 'react';
import Helmet from 'react-helmet';
import HeaderAlt from '../components/headeralt';
import { Container, Row, Col } from 'reactstrap';
import CallToAction from '../components/call-to-action';

const ServicesPage = () => (
    <div>
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
                    <Col className="col-12 text-center">
                        <h1>We're different in a good way</h1>
                        <p>
                            Our client's ideas are important to us which is why
                            our team makes sure to have all of the professional
                            skills necessary to meet the demands of our clients.
                            See why people love us at EadsGraphic!
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-12 col-sm-6 col-md-4">
                        <h3>Heading 3</h3>
                        <p>
                            Our designers work relentlessly to deliver clients
                            with one of a kind breathtaking designs
                        </p>
                    </Col>

                    <Col className="col-12 col-sm-6 col-md-4">
                        <h3>Heading 3</h3>
                        <p>
                            In design, deadlines are everything which is why we
                            ALWAYS deliver as promised, when promised
                        </p>
                    </Col>

                    <Col className="col-12 col-sm-6 col-md-4">
                        <h3>Heading 3</h3>
                        <p>
                            In house web developers are highly skilled on
                            popular CMS platforms such as WordPress™
                        </p>
                    </Col>

                    <Col className="col-12 col-sm-6 col-md-4">
                        <h3>Heading 3</h3>
                        <p>
                            Designers are able to get you the most bang for your
                            buck by working within client's budgets
                        </p>
                    </Col>

                    <Col className="col-12 col-sm-6 col-md-4">
                        <h3>Heading 3</h3>
                        <p>
                            We like to keep our technical and creative skills up
                            to date by attending advanced creative seminars
                        </p>
                    </Col>

                    <Col className="col-12 col-sm-6 col-md-4">
                        <h3>Heading 3</h3>
                        <p>
                            We are never out of reach and respond promptly to
                            all client communication
                        </p>
                    </Col>
                </Row>
            </section>

            <section id="brand-and-identity">
                <div className="service-item">
                    <div className="service-image">
                        <img src="#" />
                    </div>
                    <div className="service-description">
                        <h3 className="mb-3">Brand &amp; Identity</h3>
                        <h2 className="mb-3">Brand &amp; Identity</h2>
                        <p>
                            Developing a core brand strategy is essential for
                            anyone looking to solidify their position in a
                            marketplace. A complete brand strategy is something
                            that will clearly identify your brand. Think of the
                            color red with a white cursive font, and you will
                            most likely associate with the famous Coca Cola
                            brand. As designers, we can help you create a widely
                            recognized brand using the same simple tactics that
                            highly successful brands have been using for years.
                            We will first complete some market research in the
                            target market to get an idea of the customers we are
                            targeting. Upon completion of the market research,
                            we will set you up with a brand identity that
                            includes a logo, recommended brand colors, essential
                            brand fonts, and your new brand identity placed on
                            several mock-ups. We will set our customers up with
                            a consistent brand identity that will serve as an
                            identifier across various physical and digital
                            platforms well into the future.
                        </p>
                    </div>
                </div>
            </section>

            <section id="print-and-graphic-design">
                <div className="service-item">
                    <div className="service-image">
                        <img src="#" />
                    </div>
                    <div className="service-description">
                        <h3 className="mb-3">Print &amp; Graphic Design</h3>
                        <p>
                            Allow our digital artists to bring your ideas to
                            life using professional photo manipulation and
                            retouching skills that will surely catch peoples
                            attention.
                        </p>
                    </div>
                </div>
            </section>

            <section id="web-development">
                <div className="service-item">
                    <div className="service-image">
                        <img src="#" />
                    </div>
                    <div className="service-description">
                        <h3 className="mb-3">Web Development</h3>
                        <p>
                            Solidify your online presence by building an
                            entirely custom and responsive website that will
                            allow you to engage with your customers in a whole
                            new way.
                        </p>
                    </div>
                </div>
            </section>

            <section id="ui-ux-design">
                <div className="service-item">
                    <div className="service-image">
                        <img src="#" />
                    </div>
                    <div className="service-description">
                        <h3 className="mb-3">Digital Marketing</h3>
                        <p>
                            Still don’t love social media? Well let us change
                            your mind by driving in mass amounts of customer
                            engagement through custom tailored social media
                            campaigns.
                        </p>
                    </div>
                </div>
            </section>

            <section id="video-production">
                <div className="service-item">
                    <div className="service-image">
                        <img src="#" />
                    </div>
                    <div className="service-description">
                        <h3 className="mb-3">Video Production</h3>
                        <p>
                            Dad still have GoPro™ footage from last years
                            vacation?Well, let us use professional grade video
                            software to turn it into a cinematic movie to enjoy
                            for years to come.
                        </p>
                    </div>
                </div>
            </section>

            <section id="ui-ux-design">
                <div className="service-item">
                    <div className="service-image">
                        <img src="#" />
                    </div>
                    <div className="service-description">
                        <h3 className="mb-3">UI/UX Design</h3>
                        <p>
                            Levarage our in house UI/UX designers skills and
                            expertise to bring your next application to life.
                            Utilizing design best practices, we can ensure your
                            application will be user friendly.
                        </p>
                    </div>
                </div>
            </section>
        </Container>
        <CallToAction />
    </div>
);

export default ServicesPage;
