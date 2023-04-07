import React, { useState, useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { isMobile } from 'react-device-detect';
import { useSpring, animated, interpolate } from 'react-spring';

// eslint-disable-next-line
import phone from 'src/assets/images/phone.png';
// eslint-disable-next-line
import { device } from 'src/util';
import FullpageContext from '../../../fullpageContext';
import AnimateContainer from '../../../components/AnimateContainer';

const AppContainer = styled.div`
	width: 1440px;
	min-height: 100vh;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	* {
		z-index: 5;
	}

	@media ${device.mobile} {
		justify-content: space-evenly;
		width: 100%;
		flex-direction: column;
		padding: 5%;
	}
`;

const PhonesImageContainer = styled.div`
	height: 500px;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column;

	@media ${device.mobile} {
		width: 100%;
		align-items: center;
	}
`;

const ImageWrapper = styled.div`
	width: 60%;
	height: 500px;
	display: flex;
	justify-content: center;

	@media ${device.mobile} {
		width: 100%;
	}

	position: relative;
`;

const PhonePlaceholderImg = styled.div`
	width: 266px;
	height: 530px;

	background: url("${phone}") center no-repeat;
	background-size: 266px 530px;

	position: absolute;
	top: 0;

	z-index: 3;
`;

const TextContainer = styled(AnimateContainer)`
	width: 40%;
	display: flex;
	justify-content: flex-start;
	align-content: center;
	flex-direction: column;
	z-index: 20;

	@media ${device.mobile} {
		width: 100%;
	}
`;

const CarouselContainer = styled.div`
	width: 230px;
	height: 500px;
	z-index: 2;
	background: #ffffff;
	margin-top: 8px;
	padding-top: 5px;
	border-radius: 25px;
`;

const SlideSwitcherText = styled.div`
	cursor: pointer;
	height: 100%;
	position: relative;

	.title {
		font-size: 12px;
		font-weight: 600;
		margin: 20px 0 0 0;
		z-index: 100;
		letter-spacing: 2.77px;

		&:hover {
			text-decoration: underline;
		}
	}

	.text {
		padding: 20px 0;
		line-height: 23px;
		font-weight: 100;
		font-size: 14px;
		border-bottom: 1px #000000 solid;
		border-top: 1px #000000 solid;
	}
`;

const Slider = ({ slides, translateValue }) => {
	return (
		<div
			style={{
				overflow: 'hidden',
				height: '510px',
				width: '234px',
				borderRadius: '23px',
			}}
		>
			<div
				className="slider-wrapper"
				style={{
					transform: `translateY(${translateValue}px)`,
					transition: 'transform ease-in-out 0.75s',
					height: '500px',
				}}
			>
				{slides.map(image => (
					<Slide key={image.node.id} image={image} />
				))}
			</div>
		</div>
	);
};

const Slide = ({ image }) => {
	const style = {
		width: '100%',
		height: '100%',
		backgroundImage: `url(${image.node.childImageSharp.fluid.src})`,
		backgroundSize: '230px 505px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '0px 0px',
		overflow: 'hidden',
	};

	return <div className="slide" style={style} />;
};

// index = to image name in /app_gallery
const slideTexts = [
	{
		text: 'Customized Experience',
		details:
			'On SHINE you can customize the content, peer-support, or resources that are relevant to their individual or family’s needs.',
	},
	{
		text: 'Content Library',
		details:
			'This is a digital library for the you to discover content based on your interests. From cancer to mental wellness, you will find content relevant to your unique circumstances.',
	},
	{
		text: 'Connect',
		details:
			'Find or create peer-support groups and read or participate in posts in any topic with people specific to their own needs.',
	},
	{
		text: '24/7 Support Line',
		details:
			'SHINE will eventually roll out a special space to allow users to speak with professionals and peers when life hits them the hardest. Sometimes just being able to speak with someone who completely understands is just what is needed.',
	},
	{
		text: 'Local Resources',
		details:
			'Explore, find and utilize digital and physical resources available to users based off of their specific locations.',
	},
];

const SlideSwitcher = ({ slides, handleSlideChange, slideIndex }) => (
	<div style={{ padding: '20px' }}>
		{slides.map((slide, index) => {
			const textStyle = useSpring({
				scaleY: slideIndex === index ? 1 : 0,
				opacity: slideIndex === index ? 1 : 0,
			});
			const animate = useSpring({
				height: slideIndex === index ? 130 : 0,
				opacity: slideIndex === index ? 1 : 0,
			});

			return (
				<SlideSwitcherText
					key={slide.node.id}
					onClick={() => handleSlideChange(index)}
				>
					<p className="title hoverable">
						{slideTexts[index].text.toUpperCase()}
					</p>
					<animated.div
						style={{ display: 'flex', alignItems: 'center', ...animate }}
					>
						<animated.div className="text" style={textStyle} index={index}>
							{slideTexts[slideIndex].details}
						</animated.div>
					</animated.div>
				</SlideSwitcherText>
			);
		})}
	</div>
);

const MissionContainerWithData = ({ slides }) => {
	const { moveSectionUp, moveSectionDown } = useContext(FullpageContext);
	let lastYposition;

	slides.sort((a, b) => a.node.name.localeCompare(b.node.name));

	const [slideIndex, changeSlideIndex] = useState(0);
	const [translateValue, changeTranslateValue] = useState(0);

	const getSlideHeight = () =>
		document.querySelector('.slide').clientHeight || 0;

	const handleSlideChange = i => {
		if (i === slideIndex) return;

		if (i + 1 > slides.length) {
			moveSectionDown();
			return;
		}

		if (i < 0) {
			moveSectionUp();
			return;
		}

		const offset = getSlideHeight() * Math.abs(i - slideIndex);

		// eslint-disable-next-line
		slideIndex > i
			? changeTranslateValue(translateValue + offset)
			: changeTranslateValue(translateValue - offset);

		changeSlideIndex(i);
	};

	const handleTouchStart = e => {
		if (e.cancelable) {
			e.preventDefault();
		}

		lastYposition = e.touches[0].clientY;
	};

	const handleTouchEnd = e => {
		const pos = e.changedTouches[0].clientY;
		let newSlideIndex;

		if (pos > lastYposition + 50) {
			newSlideIndex = Math.max(slideIndex - 1, 0);
			handleSlideChange(newSlideIndex);
		}

		if (pos < lastYposition + 50) {
			newSlideIndex = Math.min(slideIndex + 1, slides.length - 1);
			handleSlideChange(newSlideIndex);
		}

		// eslint-disable-next-line
		newSlideIndex && changeSlideIndex(newSlideIndex);
	};

	const handleScroll = y => handleSlideChange(slideIndex + y);

	return (
		<>
			{!isMobile && (
				<ReactScrollWheelHandler
					upHandler={() => handleScroll(-1)}
					downHandler={() => handleScroll(1)}
					timeout={300}
					preventScroll
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: '20',
						opacity: 0,
						background: 'none',
						display: `${isMobile ? 'none' : 'unset'}`,
					}}
				/>
			)}
			<AppContainer>
				<PhonesImageContainer>
					<ImageWrapper>
						<PhonePlaceholderImg
							style={{ touchAction: 'none' }}
							onTouchStart={handleTouchStart}
							onTouchEnd={handleTouchEnd}
						/>
						<CarouselContainer>
							<Slider translateValue={translateValue} slides={slides} />
						</CarouselContainer>
					</ImageWrapper>
				</PhonesImageContainer>
				<TextContainer
					section={['app', 'signUp']}
					x={500}
					delay={250}
					scale={0.5}
				>
					<SlideSwitcher
						slides={slides}
						handleSlideChange={handleSlideChange}
						slideIndex={slideIndex}
					/>
				</TextContainer>
			</AppContainer>
		</>
	);
};

export default () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					allFile(filter: { relativeDirectory: { eq: "images/app_gallery" } }) {
						edges {
							node {
								id
								name
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			`}
			render={images => (
				<MissionContainerWithData slides={images.allFile.edges} />
			)}
		/>
	);
};
