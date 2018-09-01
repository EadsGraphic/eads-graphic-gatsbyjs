import React from 'react';
import { Button } from 'reactstrap';

class Services extends React.Component {
    render() {
        return (
            <section id="services">
                <div className="service-item">
                    <div className="service-image">
                        <img src="#" />
                    </div>
                    <div className="service-description">
                        <h3 className="mb-3">Brand &amp; Identity</h3>
                        <p>
                            Let’s unite all of your project’s current themes and
                            styles into one concise brandng styleguide. This
                            will allow you to portray a consistent brand image
                            moving forward.
                        </p>
                    </div>
                </div>

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
        );
    }
}

export default Services;
