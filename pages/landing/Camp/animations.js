import React from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

// eslint-disable-next-line
import { device } from 'src/util';

// eslint-disable-next-line
import _bigCircle from 'src/assets/animations/weekend_camp_bubble.svg';
// eslint-disable-next-line
import _dots from 'src/assets/animations/weekend_camp_blue_dots.svg';
// eslint-disable-next-line
import AnimatedContainer from '../../../components/AnimatedContainer';
import Float from '../../../components/Float';

const Circle = styled(Float)`
	width: 375px;
	height: 375px;
	top: 20%;
	right: 5%;
	background-image: url(${_bigCircle});
	z-index: -10;

	@media ${device.mobile} {
		width: 70%;
		height: 50%;
		top: 15%;
		right: -30%;
	}
`;

const Dots = styled(Float)`
	width: 510px;
	height: 335px;
	top: 20%;
	right: 0%;
	background-image: url(${_dots});
	z-index: 10;

	@media ${device.mobile} {
		width: 80%;
		top: 0%;
		right: -35%;
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
		>
			<Circle mouse={mouse} multi={1.5} duration={20} section="camp" />
			<Dots mouse={mouse} duration={40} invert section="camp" />
		</AnimatedContainer>
	);
};
