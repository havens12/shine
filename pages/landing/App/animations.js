import React from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import Lottie from 'react-lottie';

// eslint-disable-next-line
import { device } from 'src/util';

// eslint-disable-next-line
import _bigCircle from 'src/assets/animations/2nd_section_big_circle.svg';

// eslint-disable-next-line
import _leftCircle from 'src/assets/animations/2nd_section_left_circle.svg';
// eslint-disable-next-line
import _flower from 'src/assets/animations/flower_yellow.svg';
import animationData from '../../../assets/animationData/blop.json';
import AnimatedContainer from '../../../components/AnimatedContainer';
import Float from '../../../components/Float';

const Circle = styled(Float)`
	width: 50%;
	height: 50%;
	top: 20%;
	left: 15%;
	background-image: url(${_bigCircle});
	z-index: 1;

	@media ${device.mobile} {
		width: 90%;
		height: 50%;
		top: 0;
		left: 25%;
	}
`;

const LeftCircle = styled.div`
	position: absolute;
	width: 150px;
	height: 350px;
	top: 30%;
	background: url(${_leftCircle}) center center no-repeat;
	left: 0;
	z-index: 1;

	@media ${device.mobile} {
		width: 30%;
		height: 50%;
		top: 0;
		right: 0;
	}
`;

const Flower = styled.div`
	position: absolute;
	width: 310px;
	height: 500px;
	bottom: 0;
	left: -0%;
	background: url(${_flower}) center center no-repeat;
	z-index: 2;

	@media ${device.mobile} {
		width: 35%;
		height: 50%;
		top: 30%;
		right: 0;
	}
`;

const Blop = styled(Float)`
	width: 40%;
	height: 40%;
	top: 20%;
	left: 0%;
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
			style={{ maxWidth: '100%', width: '100%', padding: 0 }}
			onMouseMove={({ clientX: x, clientY: y }) => set({ x, y })}
		>
			<LeftCircle mouse={mouse} section="app" />
			<Circle mouse={mouse} multi={1.5} section="app" />
			<Flower />
			<Blop mouse={mouse} section="app">
				<Lottie options={blopOptions} />
			</Blop>
		</AnimatedContainer>
	);
};
