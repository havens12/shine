import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { isMobile } from 'react-device-detect';

// eslint-disable-next-line
import { device, flexUnit } from 'src/util';
// eslint-disable-next-line
import ButtonLink from 'src/components/ButtonLinkAnimated';

import AnimateContainer from '../../../components/AnimateContainer';

const IntroContainer = styled(animated.div)`
	display: flex;
	justify-content: space-between;
	min-height: 100%;
	align-items: center;
	flex-direction: column;
	padding-bottom: 70px !important;

	* {
		z-index: 5;
	}
`;

const HeroTextContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 60%;

	@media ${device.mobile} {
		width: 100%;
	}
`;

const HeroText = styled(animated.div)`
	font-weight: 600;
	width: 100%;
`;

const HeroTextH3 = styled(animated.h3)`
	${flexUnit(10, 10, 82)}
	${flexUnit(12, 10, 95, 'vw', 'line-height')}
	letter-spacing: 0.89px;
	display: inline-block;
	margin: 1% 10px;
`;

const IntroTextContainer = styled.div`
	flex: 2;
	padding: 0 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const IntroText = styled.div`
	width: 35%;
	${flexUnit(9, 8, 14)}
	${flexUnit(12, 10, 22, 'vw', 'line-height')}
	font-weight: 100;

	@media ${device.mobile} {
		width: 100%;
		padding-bottom: 10%;
	}
`;

const items = [
	{ text: 'When a', x: -100, y: 10 },
	{
		text: 'child',
		x: 0,
		y: -100,
		s: { fontStyle: 'italic', fontWeight: 100 },
	},
	{ text: 'gets ', x: 100, y: 10 },
	{ text: 'cancer, the', x: -100, y: 0 },
	{
		text: 'family',
		x: 150,
		y: -0,
		s: { fontStyle: 'italic', fontWeight: 100 },
	},
	{ text: 'gets cancer', x: 0, y: 100 },
];

export default () => {
	const transitions = useTransition(items, item => item.text, {
		from: ({ x, y }) => ({ x, y, opacity: 0 }),
		enter: { x: 0, y: 0, opacity: 1 },
		config: { mass: 3, tension: 90, clamp: true },
		trail: 300,
	});

	const TextWithTransitions = () =>
		transitions.map(({ item, props, key }) => (
			<HeroTextH3 key={key} style={{ ...item.s, ...props }}>
				{item.text}
			</HeroTextH3>
		));

	return (
		<IntroContainer>
			<HeroTextContainer>
				<HeroText>
					<TextWithTransitions />
				</HeroText>
			</HeroTextContainer>
			<AnimateContainer
				section={['intro', '']}
				delay={2000}
				x={-200}
				style={{ width: '100%' }}
			>
				<IntroTextContainer>
					<IntroText>
						MySunshine is helping all family members & loved ones battle the
						emotional challenges of pediatric cancer with innovative support
						through technology.
					</IntroText>
					<ButtonLink
						to="app"
						text={isMobile ? '' : 'Discover'}
						height="70px"
						width={isMobile ? '100px' : '150px'}
						type="button"
						underlined
					/>
				</IntroTextContainer>
			</AnimateContainer>
		</IntroContainer>
	);
};
