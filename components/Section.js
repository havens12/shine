import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import { device } from 'src/util';

const StyledSection = styled.div`
	display: flex;
	position: relative;
	max-width: 100%;
	/* overflow: hidden; */
	min-height: ${props => (props.fullscreen ? '100vh' : 'auto')};
	background: ${props => props.background || '#FFFFFF'};
	height: auto !important;
	padding: 1% 0;

	@media ${device.mobile} {
		padding: 0;
	}

	> * {
		white-space: normal;
		text-overflow: ellipsis;
		overflow: hidden;
		min-width: 0;

		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	> div {
		max-width: 1440px;
		padding: 0 100px;

		@media ${device.mobile} {
			padding: 0 5%;
		}
	}
`;

const Section = ({ children, className, fullscreen, background, ...rest }) => (
	<StyledSection
		className={`section ${className}`}
		background={background}
		fullscreen={fullscreen}
		{...rest}
	>
		{children}
	</StyledSection>
);

export default Section;

Section.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	fullscreen: PropTypes.bool,
	background: PropTypes.string,
};
