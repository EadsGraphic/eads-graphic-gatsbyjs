import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/footer';

import '../assets/scss/main.scss';

const DefaultLayout = ({ children }) => (
    <div>
        <Helmet
            title={'EadsGraphic'}
            meta={[
                { name: 'description', content: 'Home Sample' },
                { name: 'keywords', content: 'Home description' },
            ]}
        />
        {/* CSS Grid */}
        <div className="grid-container">
            <main className="grid-main">{children()}</main>

            <div className="grid-footer mt-5">
                <Footer />
            </div>
        </div>
    </div>
);

export default DefaultLayout;
