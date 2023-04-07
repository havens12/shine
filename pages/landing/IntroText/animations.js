import React from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import Lottie from 'react-lottie';

// eslint-disable-next-line
import { device } from 'src/util';

// eslint-disable-next-line
import _blueDots from 'src/assets/animations/hero_blue_dots.svg';
// eslint-disable-next-line
import _blackDots from 'src/assets/animations/hero_black_dots.svg';

// eslint-disable-next-line
import _circle from 'src/assets/animations/hero_circle.svg';

// eslint-disable-next-line
import _halfCircle from 'src/assets/animations/hero_half_circle.svg';

// eslint-disable-next-line
import _rightCircle from 'src/assets/animations/hero_right_circle.png';
// eslint-disable-next-line
import _smallCircle from 'src/assets/animations/hero_smaller_circle.png';
import animationData from '../../../assets/animationData/blop.json';
import AnimatedContainer from '../../../components/AnimatedContainer';
import Float from '../../../components/Float';

const BlueDots = styled(Float)`
	width: 700px;
	height: 65%;
	top: 5%;
	left: -5%;
	background-image: url(${_blueDots});
	z-index: 2;

	@media ${device.mobile} {
		width: 90%;
		height: 30%;
		top: 0%;
	}
`;

const BlackDots = styled(Float)`
	width: 375px;
	height: 30%;
	top: 23%;
	right: 0%;
	background-image: url(${_blackDots});
	z-index: 2;

	@media ${device.mobile} {
		width: 50%;
		height: 30%;
		top: 30%;
	}
`;

const Circle = styled(Float)`
	width: 350px;
	height: 45%;
	top: 5%;
	left: 30%;
	background-image: url(${_circle});
	z-index: 1;

	@media ${device.mobile} {
		width: 90%;
		height: 50%;
		top: 0;
		left: 0;
	}
`;

const RightCircle = styled(Float)`
	width: 10%;
	height: 30%;
	top: 10%;
	right: -10%;
	background-image: url(${_rightCircle});
	z-index: 1;
`;

const HalfCircle = styled(Float)`
	width: 240px;
	height: 20%;
	top: 45%;
	left: 50%;
	background-image: url(${_halfCircle});
	z-index: 1;
`;

const SmallCircle = styled(Float)`
	width: 80px;
	height: 10%;
	bottom: 30%;
	right: 25%;
	background-image: url(${_smallCircle});
	z-index: 1;
`;

const Blop = styled(Float)`
	width: 50%;
	height: 50%;
	top: 10%;
	left: 40%;
	z-index: 1;

	* {
		fill: #185fec;
	}
`;

export default () => {
	const [mouse, set] = useSpring(() => ({
		xy: [0, 0],
		x: 0,
		y: 0,
		config: { mass: 500, tension: 300, friction: 100 },
	}));

	const blopOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid meet',
		},
	};

	return (
		<AnimatedContainer
			onMouseMove={({ clientX: x, clientY: y }) => set({ x, y })}
		>
			<BlueDots mouse={mouse} duration={120} section="intro" />
			<BlackDots mouse={mouse} invert duration={60} section="intro" />
			<RightCircle mouse={mouse} invert duration={50} section="intro" />
			<Circle mouse={mouse} duration={60} multi={1.5} section="intro" />
			<HalfCircle mouse={mouse} duration={50} section="intro" />
			<SmallCircle mouse={mouse} multi={2} section="intro" />
			<Blop mouse={mouse} multi={2} invert duration={90} section="intro">
				<Lottie options={blopOptions} />
			</Blop>
		</AnimatedContainer>
	);
};
