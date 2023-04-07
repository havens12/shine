import React from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

// eslint-disable-next-line
import { device } from 'src/util';

// eslint-disable-next-line
import _flower from 'src/assets/animations/flower_grey.svg';
import AnimatedContainer from '../../../components/AnimatedContainer';
import Float from '../../../components/Float';

const Flower = styled(Float)`
	width: 50%;
	height: 50%;
	top: 35%;
	left: 5%;
	background-image: url(${_flower});

	animation: rotation 40s infinite linear;

	@media ${device.mobile} {
		width: 70%;
		height: 50%;
		top: 10%;
		left: 0%;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
`;

export default () => {
	const [mouse, set] = useSpring(() => ({
		xy: [0, 0],
		x: 0,
		y: 0,
		config: { mass: 500, tension: 300, friction: 100 },
	}));

	return (
		<AnimatedContainer
			onMouseMove={({ clientX: x, clientY: y }) => set({ x, y })}
			style={{ overflow: 'hidden' }}
		>
			<Flower mouse={mouse} section="textBox" />
		</AnimatedContainer>
	);
};
