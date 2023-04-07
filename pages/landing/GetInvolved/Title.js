import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
import { flexUnit } from 'src/util';

import AnimateContainer from '../../../components/AnimateContainer';

const GetInvolvedContainer = styled.div`
	min-height: 800%;
	display: flex;
	align-items: center;
	flex-direction: column;
	z-index: 10;
`;

const GetInvolvedTitle = styled.div`
	flex: 3;
	min-height: 90vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	line-height: 75px;
	${flexUnit(12, 12, 62)}
	z-index: 10;

	.get {
		font-weight: 900;
	}

	.involved {
		font-weight: 100;
		font-style: italic;
	}
`;

const GetInvolved = () => (
	<GetInvolvedContainer>
		<GetInvolvedTitle>
			<AnimateContainer
				section={['getInvolved', 'getInvolvedQA']}
				y={200}
				scale={0.5}
				exit={1}
			>
				<span className="get">Get</span>
				&nbsp;
				<span className="involved">involved!</span>
			</AnimateContainer>
		</GetInvolvedTitle>
	</GetInvolvedContainer>
);

export default GetInvolved;
