import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
import { device, flexUnit } from 'src/util';
// eslint-disable-next-line
import UnerlineTitle from 'src/components/UnderlineTitle';
// eslint-disable-next-line
import iconAndroid from 'src/assets/icons/android.svg';
// eslint-disable-next-line
import iconApple from 'src/assets/icons/apple.svg';
// eslint-disable-next-line
import iconWeb from 'src/assets/icons/web.svg';

import AnimateText from '../../../components/AnimateText';
import AnimateContainer from '../../../components/AnimateContainer';

const WelcomeContainer = styled.div`
	max-width: 1440px;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media ${device.mobile} {
		padding: 0 5%;
	}
`;

const TextContainer = styled.div`
	padding: 30px 0;
	display: flex;

	@media ${device.mobile} {
		flex-direction: column;

		> div {
			width: 100%;
		}
	}
`;

const Text = styled.div`
	flex: 2;
	max-width: 70%;
	${flexUnit(6, 6, 32)}
	line-height: 44px;
	font-weight: 900;

	@media ${device.mobile} {
		line-height: 32px;
		max-width: 100%;
	}
`;

const PlatformsContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	@media ${device.mobile} {
		padding-top: 20%;
	}
`;

const Platforms = styled.div`
	display: flex;
	align-content: center;
	margin-left: auto;
	line-height: 30px;
	font-weight: 100;
	${flexUnit(12, 12, 14)}

	> * {
		padding-right: 7%;
	}

	@media ${device.mobile} {
		margin: auto;
	}
`;

const IconsContainer = styled.div`
	display: flex;
`;

const PlatformIcon = styled.img`
	margin: 0 5px;
	height: 30px;
	max-height: 25px;
`;

export default () => {
	const text = [
		`Welcome to SHINE! A FREE web & phone app created`,
		`by the Getch Foundation and MySunshine Foundation`,
		`to help all family members and loved ones battling a`,
		`pediatric cancer diagnosis together.`,
		`Because when a child gets cancer, the whole family gets get’s cancer.`,
	];

	return (
		<WelcomeContainer>
			<UnerlineTitle text="Welcome to Shine!" section="welcome" />
			<TextContainer>
				<Text>
					<AnimateText textArray={text} section="welcome" delay={500} />
				</Text>
				<PlatformsContainer>
					<AnimateContainer section="welcome" y={200}>
						<Platforms>
							<span>Platforms:</span>
							<IconsContainer>
								<PlatformIcon src={iconApple} />
								<PlatformIcon src={iconAndroid} />
								<PlatformIcon src={iconWeb} />
							</IconsContainer>
						</Platforms>
					</AnimateContainer>
				</PlatformsContainer>
			</TextContainer>
		</WelcomeContainer>
	);
};
