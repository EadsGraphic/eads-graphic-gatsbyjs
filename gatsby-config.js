module.exports = {
    siteMetadata: {
        title: 'EadsGraphic',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'EadsGraphic',
                short_name: 'EadsGraphic',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#2687f6',
                display: 'standalone',
                icon: 'src/assets/images/favicon.png',
            },
        },
        `gatsby-plugin-offline`,
    ],
};
