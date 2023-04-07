import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { isMobile } from 'react-device-detect';

// eslint-disable-next-line
import { device } from 'src/util';

// eslint-disable-next-line
import UnderlineTitle from 'src/components/UnderlineTitle';
// eslint-disable-next-line
import ButtonLink from 'src/components/ButtonLink';
import PageContext from '../../../pageContext';
import FullpageContext from '../../../fullpageContext';
import AnimateContainer from '../../../components/AnimateContainer';

import ImageReveal from '../../../components/ImageReveal';
import campImage from '../../../assets/images/camp.jpg';
import campImage2 from '../../../assets/images/camp2.jpg';

const CampContainer = styled.div`
	flex: 1;
	max-width: 1440px;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media ${device.mobile} {
		padding: 0 !important;
	}
`;

const BackgroundImageStyled = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	padding: 5% 0;
	z-index: 100;
	position: relative;
`;

const ImageContainer = styled.div`
	position: absolute;
	width: 620px;
	height: 540px;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);

	@media ${device.mobile} {
		top: 35%;
		width: 100vw;
		height: 60vw;
	}
`;

const CampContentContainer = styled.div`
	align-self: flex-end;
	z-index: 5;

	@media ${device.mobile} {
		padding: 0 5%;
	}
`;

const TextContainer = styled.div`
	display: flex;

	@media ${device.mobile} {
		flex-direction: column;
	}
`;

const Text = styled.div`
	width: 50%;
	font-size: 32px;
	font-weight: 900;

	@media ${device.mobile} {
		width: 100%;
		font-size: 22px;
	}
`;

const ButtonContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	@media ${device.mobile} {
		padding-top: 10%;
		width: 100%;
	}
`;

export default () => {
	const [next, setNext] = useState(-1);
	const { moveSectionUp, moveSectionDown } = useContext(FullpageContext);
	const { next: nextAnchor } = useContext(PageContext);
	const images = [campImage, campImage2];

	useEffect(() => {
		if (nextAnchor === 'camp') {
			setNext(0);
		} else {
			setNext(-1);
		}
	}, [nextAnchor]);

	const revealNext = () => {
		if (next + 1 >= images.length) {
			moveSectionDown();
		} else {
			setNext(next + 1);
		}
	};

	const revealPrev = () => {
		if (next - 1 < 0) {
			moveSectionUp();
		} else {
			setNext(next - 1);
		}
	};

	return (
		<>
			{nextAnchor === 'camp' && (
				<ReactScrollWheelHandler
					upHandler={revealPrev}
					downHandler={revealNext}
					timeout={300}
					preventScroll
					style={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: '101',
						opacity: 0,
						background: 'none',
						display: `${isMobile ? 'none' : 'unset'}`,
					}}
				/>
			)}
			<CampContainer>
				<BackgroundImageStyled>
					<ImageContainer>
						<ImageReveal next={next} images={images} />
					</ImageContainer>

					<CampContentContainer>
						<UnderlineTitle text="Weekend Camp" noBorder section="camp" />
						<TextContainer>
							<Text>
								<AnimateContainer section="camp" x={-200} scale={1}>
									Along with our app, MySunshine also hosts an annual weekend
									camp for families battling pediatric cancer to connect with
									each other and receive more hands-on emotional support and
									resources.
								</AnimateContainer>
							</Text>

							<ButtonContainer>
								<Fade right delay={1500}>
									<ButtonLink
										text="Volunteer at our camp!"
										height="45px"
										width="230px"
									/>
								</Fade>
							</ButtonContainer>
						</TextContainer>
					</CampContentContainer>
				</BackgroundImageStyled>
			</CampContainer>
		</>
	);
};
