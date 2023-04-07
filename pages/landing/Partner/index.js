import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
import UnderlineTitle from 'src/components/UnderlineTitle';
// eslint-disable-next-line
import { device, flexUnit } from 'src/util';
// eslint-disable-next-line
import logo from 'src/assets/logos/getch.svg';

import AnimateText from '../../../components/AnimateText';
import AnimateContainer from '../../../components/AnimateContainer';

const PartnerContainer = styled.div`
	background-color: #f3f7fa;

	@media ${device.mobile} {
		margin: 10% 0;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	padding: 5% 0 200px 0;

	> div {
		@media ${device.mobile} {
			width: 100%;
		}
	}

	@media ${device.mobile} {
		padding: 5%;
		flex-direction: column;
	}
`;

const TextContainer = styled.div`
	flex: 2;
	${flexUnit(4, 4, 28)}
	font-weight: 900;
`;

const LogoContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media ${device.mobile} {
		padding: 10% 0 0 0;
		justify-content: center;
	}
`;

const Logo = styled.img``;

export default () => {
	const text = [
		`<i style="font-weight: 100">MySunshine</i> is in direct partnership with the 
		<i style="font-weight: 100">Getch Foundation</i> who supply the funding and development oversight for creating
		the ‘Shine’ platform.`,
		`The Getch Foundation Mission: Moving the needle of economic change
		through targeted grants and deployment of specialized technology.`,
	];

	return (
		<PartnerContainer>
			<UnderlineTitle text="Our Main Partner" section="partner" />
			<ContentContainer>
				<TextContainer>
					<AnimateText textArray={text} section="partner" />
				</TextContainer>
				<LogoContainer>
					<AnimateContainer y={200} section="partner">
						<Logo alt="Getch Foundation" src={logo} />
					</AnimateContainer>
				</LogoContainer>
			</ContentContainer>
		</PartnerContainer>
	);
};
