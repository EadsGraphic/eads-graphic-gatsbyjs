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
                rel="preload"
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
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
