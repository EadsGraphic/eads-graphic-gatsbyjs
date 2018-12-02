import React from 'react';
import Helmet from 'react-helmet';
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
                            In a world where everything is moving towards
                            digitalization, sometimes it is a nice change of
                            pace to see an eye-catching printed design. Print
                            materials are great for business outings, sports
                            functions, as well as creating lasting
                            relationships. Distributing print materials is an
                            excellent way to engage with people as they offer a
                            tangible product that can take your brand to the
                            next level. From business cards, stationery, and
                            event banners, to game day posters or full locker
                            room vinyl wraps we will design printed materials
                            that will get people talking. Our graphic designers
                            utilize the industry standard Adobe CC suite of
                            products to ensure that we are able to satisfy and
                            meet all of our client’s project requirements.
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
                            Our in house web designers will deliver clients with
                            a hand built, custom tailored website that will
                            fulfill all of their online needs. We build websites
                            that last, as we stay up to date with all of the
                            latest web technologies to ensure that your site
                            does not become outdated. Mobile friendly websites
                            are essential in today's world which is why we
                            incorporate a flexible grid system in our sites to
                            make sure your website looks great on smartphones
                            and desktops. We are able to deliver cutting edge
                            websites to our clients by using popular content
                            management platforms that allow our clients to
                            easily maintain what we have already built for their
                            company. This allows clients to spend more time on
                            what really matters and less time worrying about the
                            technicalities of their website. Let our team help
                            you drive web traffic and sales to your new
                            business!
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
                            In today's day and age a strong social media
                            presence means the world. Understanding its uses and
                            the ability to harness its power will set you and
                            your organization apart from all of your
                            competition. You have all been witnesses to that one
                            funny video that went viral, or that one picture
                            that got retweeted by a celebrity. What if next time
                            that could be you? At EadsGraphic we will design
                            unique and engaging social media campaigns and
                            profiles that generate positive buzz around you,
                            your brand, or your organization.
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
                            Tired of watching the same old, boring homemade
                            videos? Look no more, as EadsGraphic has an in-house
                            video editing team that will make you second guess
                            whether or not that video was filmed in Hollywood or
                            your backyard. Our team utilizes professional grade
                            video editing software to deliver cinematic quality
                            footage back to our clients. This is the perfect
                            service for athletes looking to create highlight
                            tapes for recruiters, families returning home from
                            vacation, or even realtors looking to showcase that
                            new property that just hit the market.
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
                            When it comes to mobile and web applications, the
                            user is always the one who determines your success.
                            Let us help your development team design
                            applications that put the user first and ensure that
                            your app is successful. UX Design is focused on user
                            experience and UI design is focused on the interface
                            users utilize we have professional UI/UX designers
                            on our team that has worked on several large mobile
                            and desktop applications. Our designers will work
                            closely with the developer to ensure a seamless
                            transition between designs and code.
                        </p>
                    </div>
                </div>
            </section>
        </Container>
        <CallToAction />
    </div>
);

export default ServicesPage;
