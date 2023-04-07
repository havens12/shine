/* global fullpage_api */

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import button from '../assets/icons/button.svg';

const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	justify-content: space-between;
	padding: 1px;
	cursor: pointer;
	font-size: 14px;
	overflow: visible;

	span {
		text-decoration: ${props => (props.underlined ? 'underline' : 'none')}
	}



	.button {
		/* position: absolute; */
		/* right: 0; */
		/* top: 0; */
		width: 250px;
		height: 50px;
		background: url("${button}") right no-repeat;
		background-size: 250px 50px;
		transform: rotate(90deg);
		border: 3px red solid;
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

const Button = styled.img`
	position: absolute;
	right: -50%;
	top: -75%;
	transform: rotate(90deg);
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
	underlined,
}) => {
	const [hover, setHover] = useState(false);

	return (
		<ButtonContainer
			style={{ width, height, fontSize, fontWeight }}
			underlined={underlined}
			className={className}
			onClick={() => (onClick ? onClick() : fullpage_api.moveTo(to))}
		>
			<span>{text}</span>
			<Button
				src={button}
				className="hoverable"
				onMouseOver={() => setHover(true)}
				onMouseOut={() => setHover(false)}
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
