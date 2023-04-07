import React from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

// eslint-disable-next-line
import { device } from 'src/util';

// eslint-disable-next-line
import _bigCircle from 'src/assets/animations/mission_circle.svg';

// eslint-disable-next-line
import _halfCircle from 'src/assets/animations/mission_half_cirlce.png';
// eslint-disable-next-line
import _yellowDots from 'src/assets/animations/mission_yellow_dots.svg';
import _yellowDots2 from 'src/assets/animations/mission_yellow_dots_2.svg';

import AnimatedContainer from '../../../components/AnimatedContainer';
import Float from '../../../components/Float';

const Circle = styled(Float)`
	width: 590px;
	height: 590px;
	top: 0%;
	left: 15%;
	background-image: url(${_bigCircle});
	z-index: 1;

	@media ${device.mobile} {
		width: 90%;
		height: 50%;
		top: -5%;
		left: 5%;
	}
`;

const HalfCircle = styled(Float)`
	width: 200px;
	height: 200px;
	top: 50%;
	left: 40%;
	background-image: url(${_halfCircle});
	z-index: 2;

	@media ${device.mobile} {
		width: 30%;
		height: 50%;
		top: 5%;
		left: 60%;
	}
`;

const YellowDots = styled(Float)`
	width: 650px;
	height: 350px;
	top: 40%;
	left: -5%;
	background-image: url(${_yellowDots});
	z-index: 2;

	@media ${device.mobile} {
		width: 35%;
		height: 50%;
		top: 5%;
		right: 0;
	}
`;

const YellowDots2 = styled(Float)`
	width: 650px;
	height: 350px;
	top: 20%;
	right: -15%;
	background-image: url(${_yellowDots2});
	z-index: -1;

	@media ${device.mobile} {
		width: 35%;
		height: 50%;
		top: 20%;
		right: 0;
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
			<HalfCircle mouse={mouse} multi={2} duration={120} section="mission" />
			<Circle mouse={mouse} multi={1.5} section="mission" />
			<YellowDots
				mouse={mouse}
				multi={1.5}
				duration={120}
				invert
				section="mission"
			/>
			<YellowDots2 mouse={mouse} section="mission" />
		</AnimatedContainer>
	);
};
