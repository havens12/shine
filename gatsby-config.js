const path = require('path');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ANALYTICS_ID } = process.env;

const plugins = [
	'gatsby-plugin-react-helmet',
	{
		resolve: 'gatsby-plugin-manifest',
		options: manifestConfig,
	},
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `images`,
			path: path.join(__dirname, 'src', 'assets'),
		},
	},
	'gatsby-plugin-styled-components',
	'gatsby-transformer-sharp',
	'gatsby-plugin-sharp',
	'gatsby-plugin-root-import',
	'gatsby-plugin-sass',
];

if (ANALYTICS_ID) {
	plugins.push({
		resolve: 'gatsby-plugin-google-analytics',
		options: {
			trackingId: ANALYTICS_ID,
		},
	});
}

module.exports = {
	siteMetadata: {},
	plugins,
};
