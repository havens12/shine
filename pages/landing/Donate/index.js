import React from 'react';
import styled from 'styled-components';

import ButtonLink from '../../../components/ButtonLink';

// eslint-disable-next-line
import { device, flexUnit } from 'src/util';

import AnimateText from '../../../components/AnimateText';
import AnimateContainer from '../../../components/AnimateContainer';

const DonateContainer = styled.div`
	padding: 10%;
	display: flex;
	min-height: 70vh;
	align-items: center;
	flex-direction: column;
	background-color: #f3f3f3;
	font-size: 12px;
	letter-spacing: 1px;

	* {
		color: #185fec;
	}

	a {
		text-decoration: none;
	}
`;

const DonateBox = styled.div`
	display: flex;

	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 50%;

	@media ${device.mobile} {
		width: 100%;
		padding: 5%;
	}
`;

const DonateTextBox = styled.div`
	padding: 30px 0;
	border-top: #185fec 1px solid;

	& div {
		${flexUnit(5, 24, 42, 'vw', 'font-size')}
		${flexUnit(5, 32, 47, 'vw', 'line-height')}
		text-align: center;
		font-weight: 900;
	}
`;

const DonateButtonContainer = styled(AnimateContainer)`
	display: flex;
	flex-direction: column-reverse;
`;

const DonateButton = styled(ButtonLink)`
	align-self: flex-end;
`;

const Donate = () => {
	const text = [
		`<i style="font-weight: 100">Your donation</i> allows`,
		`MySunshine to expand the`,
		`the reach, content, and value`,
		`the Shine platform.`,
	];
	return (
		<DonateContainer>
			<DonateBox>
				<DonateTextBox>
					<AnimateText textArray={text} section={['donate', 'footer']} />
				</DonateTextBox>
				<DonateButtonContainer section={['donate', 'footer']} y={200}>
					<DonateButton
						text="Donate"
						width="120px"
						height="50px"
						fontSize="12px"
						fontWeight="600"
						href="#"
					/>
				</DonateButtonContainer>
			</DonateBox>
		</DonateContainer>
	);
};

export default Donate;
