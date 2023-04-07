import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const delayDelta = '0.15s';
const animationDuration = '1s';

const RevealWrapper = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
	overflow: hidden;
	height: ${({ reveal }) => (reveal ? '100%' : '0')};
	transition: all ${animationDuration} ease-in-out
		${({ reveal }) => !reveal && delayDelta};
`;

const Wrapper = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	width: 100%;
	height: 100%;
	padding-top: 60%;
`;

const RevealImageContainer = styled.div`
	overflow: hidden;

	&::after {
		content: '';
		position: absolute;
		display: block;
		will-change: top;
		top: ${({ reveal }) => (reveal ? `-100%` : `0`)};
		transition: all ${animationDuration} ease-in-out
			${({ reveal }) => !reveal && delayDelta};
		left: 0;
		width: 100%;
		height: 100%;
		background: #f3f7fa;
		z-index: 2;
	}
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	will-change: transform;
	transition: transform ${animationDuration} ease-in-out
		${({ reveal }) => !reveal && delayDelta};
	transform: ${({ reveal }) =>
		reveal ? `translateY(0)` : `translateY(100vh)`};
`;

const RevealBackground = styled(Background)`
	transition: transform ${animationDuration} ease-in-out
		${({ reveal }) => reveal && delayDelta};
	transform: ${({ reveal }) =>
		reveal ? `translateY(-100%)` : `translateY(0)`};
	z-index: 1;
`;

const SlideInImage = styled(Image)`
	will-change: transform;
	transition: transform ${animationDuration} ease-in-out
		${({ reveal }) => reveal && `0.2s`};
	transform: ${({ reveal }) =>
		reveal ? `translateY(0)` : `translateY(100vh)`};
`;

const ImageReveal = ({ next, images: [firstImage, ...restImages] }) => {
	const [show, setShow] = useState(true);

	useLayoutEffect(() => {
		setShow(next === 'camp');
	});

	return (
		<RevealWrapper reveal={next >= 0}>
			<Wrapper>
				<RevealImageContainer reveal={next >= 0}>
					<RevealBackground reveal={next >= 0} />
					<Image src={firstImage} />
				</RevealImageContainer>
				{restImages.map((image, i) => (
					<div key={i}>
						<Background reveal={next >= i + 1} />
						<SlideInImage src={image} reveal={next >= i + 1} />
					</div>
				))}
			</Wrapper>
		</RevealWrapper>
	);
};

ImageReveal.propTypes = {
	next: PropTypes.number,
	// eslint-disable-next-line react/forbid-prop-types
	images: PropTypes.array,
};

export default ImageReveal;
