import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

// eslint-disable-next-line
import { device } from 'src/util';
import ButtonLink from '../../../components/ButtonLink';

const SignUpContainer = styled.div`
	max-width: 1440px;
	z-index: 5;
`;

const TextBox = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	width: 100%;
	padding-bottom: 250px;

	@media ${device.mobile} {
		width: 100%;
		flex-direction: column;
		padding: 200px 0;
	}
`;

const Text = styled.span`
	display: flex;
	flex: 3;
	font-size: 72px;
	font-weight: 900;
	letter-spacing: -1.03px;

	@media ${device.mobile} {
		display: inline-block;
		font-size: 32px;
		padding: 0 0 20px 0;
	}
`;
const Action = styled.span`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;

const Italic = styled.span`
	font-style: italic;
	font-weight: 100;
`;

export default () => (
	<SignUpContainer>
		<TextBox>
			<Text>
				Sign up&nbsp;
				<Italic>for Shine</Italic>
				&nbsp;now!
			</Text>
			<Action>
				<ButtonLink type="button" width="100%" />
			</Action>
		</TextBox>
	</SignUpContainer>
);
