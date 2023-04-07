import React from 'react';
import styled from 'styled-components';

import AnimateText from '../../../components/AnimateText';

// eslint-disable-next-line
import { device, flexUnit } from 'src/util';

const TextBoxContainer = styled.div`
	max-width: 1440px;
	flex: 1;
	display: flex;
	align-items: center;
	flex-direction: column;
	z-index: 5;
	overflow: hidden;
`;

const TextBox = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	width: 90%;

	font-size: 62px;
	line-height: 75px;
	font-weight: 900;
	${flexUnit(9, 8, 64)}
	${flexUnit(12, 10, 75, 'vw', 'line-height')}

	@media ${device.mobile} {
		width: 100%;
	}
`;

export default () => {
	const items = [
		'Helping families battle the',
		'<i style="font-weight: 100">emotional challenges</i>',
		'of pediatric cancer with innovative',
		'support through technology',
	];

	return (
		<TextBoxContainer>
			<TextBox>
				<AnimateText textArray={items} section="textBox" />
			</TextBox>
		</TextBoxContainer>
	);
};
