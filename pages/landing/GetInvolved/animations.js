import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, interpolate } from 'react-spring';
import { isMobile } from 'react-device-detect';

// eslint-disable-next-line
import { device } from 'src/util';

// eslint-disable-next-line
import _bigCircle from 'src/assets/animations/hero_circle.svg';

// eslint-disable-next-line
import _halfCircle from 'src/assets/animations/circle_with_halfcircle.svg';
// eslint-disable-next-line
import _blueDots from 'src/assets/animations/blue_dots_long.svg';
// eslint-disable-next-line
import _yellowDots2 from 'src/assets/animations/mission_yellow_dots_2.svg';

import AnimatedContainer from '../../../components/AnimatedContainer';
import Float from '../../../components/Float';

const Circle = styled(Float)`
	width: 360px;
	height: 360px;
	top: 40%;
	left: 50%;
	background-image: url(${_bigCircle});

	@media ${device.mobile} {
		width: 80%;
		height: 40%;
		top: 40%;
		left: 15%;
	}
`;

const HalfCircle = styled(Float)`
	width: 35%;
	height: 45%;
	top: 30%;
	left: 38%;
	background-image: url(${_halfCircle});

	@media ${device.mobile} {
		width: 80%;
		height: 100%;
		top: 0%;
		left: 0%;
	}
`;

const BlueDots = styled(Float)`
	width: 1200px;
	height: 200px;
	top: 35%;
	left: 10%;
	background-image: url(${_blueDots});

	@media ${device.mobile} {
		width: 200%;
		height: 100%;
		top: 0;
		left: -50%;
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
			<HalfCircle mouse={mouse} section={['getInvolved', 'getInvolvedQA']} />
			<Circle
				mouse={mouse}
				multi={2}
				invert
				section={['getInvolved', 'getInvolvedQA']}
			/>
			<BlueDots
				mouse={mouse}
				multi={1.5}
				style={{ rotate: isMobile ? 130 : 0 }}
				section={['getInvolved', 'getInvolvedQA']}
			/>
		</AnimatedContainer>
	);
};
