import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/footer';

import '../assets/scss/main.scss';

import favicon from '../assets/images/favicon.png';

const DefaultLayout = ({ children }) => (
    <div>
        <Helmet
            title={'EadsGraphic'}
            meta={[
                { name: 'description', content: 'Home Sample' },
                { name: 'keywords', content: 'Home description' },
            ]}
        >
            <link rel="favicon" type="image/png" href={favicon} />
            <link
                rel="prefetch"
                as="font"
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
            />
            <link
                rel="prefetch"
                as="font"
                href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                crossorigin="anonymous"
            />
        </Helmet>
        {/* CSS Grid */}
        <div className="grid-container">
            <main className="grid-main">{children()}</main>

            <div className="grid-footer">
                <Footer />
            </div>
        </div>
    </div>
);

export default DefaultLayout;
