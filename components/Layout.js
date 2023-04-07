import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import { isMobile } from 'react-device-detect';

import 'react-tippy/dist/tippy.css';
import Helmet from './Helmet';
import '../assets/fonts/fontFaces.css';

const GlobalStyle = createGlobalStyle`
	*,
	*::after,
	*::before { 
		box-sizing: inherit;
		}

	html, body {
		width: 100%;
		height: 100%;
		max-width:100%;
		cursor: none;
	}

	*, :hover {
		cursor: none !important;
	}

	&.menu-open {
		overflow: hidden;
	}

	body {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		font-family: 'Apercu', sans-serif;
		font-display: swap;
		font-display: fallback;
		overflow-x: hidden;
	}

	a {
		text-decoration: none;
		color: #000000;
	}

	a:visited {
		color: #000000;
	}

	.react-reveal {
		@media (max-width: 959px) {
			animation: ${isMobile && 'none !important'};
			opacity: ${isMobile && '1 !important'};
		}
	}
`;

const Layout = ({ children }) => {
	return (
		<Fragment>
			<GlobalStyle />
			<ScrollingProvider>
				<Helmet />
				{children}
			</ScrollingProvider>
		</Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
