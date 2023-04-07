/* global fullpage_api */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../assets/icons/arrow.svg';
import button from '../assets/icons/button.svg';

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	justify-content: space-between;
	padding: 1px;
	cursor: pointer;
	font-size: 14px;

	span {
		text-decoration: ${props => (props.underlined ? 'underline' : 'none')}
	}

	.arrow {
		width: 46px;
		height: 46px;
		background: url("${arrow}") right no-repeat;
		background-size: contain;
	}

	.button {
		width: 175px;
		height: 46px;
		background: url("${button}") right no-repeat;
		background-size: contain;
	}

	&:hover {
		.arrow {
		transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
		transform-origin: 50% 50%;

			&.up {
				transform: rotate(-90deg);
			}
			&.down {
				transform: rotate(90deg);
			}
		}
	}
`;

const ButtonLink = ({
	text,
	to,
	onClick,
	className,
	width,
	height,
	fontSize,
	fontWeight,
	arrow,
	underlined,
	type,
}) => {
	return (
		<ButtonContainer
			style={{ width, height, fontSize, fontWeight }}
			underlined={underlined}
			className={className}
			onClick={() => (onClick ? onClick() : fullpage_api.moveTo(to))}
		>
			<span>{text}</span>
			<div
				className={`hoverable ${
					type === 'button' ? 'button' : 'arrow'
				} ${arrow}`}
			/>
		</ButtonContainer>
	);
};

ButtonLink.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string,
	underlined: PropTypes.bool,
};

export default ButtonLink;
