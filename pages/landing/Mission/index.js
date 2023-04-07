import React, { useContext } from 'react';
import styled from 'styled-components';
import { animated, useSprings } from 'react-spring';

// eslint-disable-next-line
import UnderlineTitle from 'src/components/UnderlineTitle';

// eslint-disable-next-line
import { device } from 'src/util';
// eslint-disable-next-line
import phone1 from 'src/assets/images/mission_phone_1.png';
// eslint-disable-next-line
import phone2 from 'src/assets/images/mission_phone_2.png';
import PageContext from '../../../pageContext';
import AnimateText from '../../../components/AnimateText';

const MissionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #f3f7fa;
	padding: 0 10%;

	@media ${device.mobile} {
		flex-direction: column;
		padding: 5%;

		> div {
			width: 100%;
		}
	}
`;

const PhonesImageContainer = styled.div`
	height: 100%;
	width: 60%;
	display: flex;
	align-items: center;
	flex-direction: row;
	z-index: 2;

	min-height: 50vh;
`;

const PhoneImage = styled.div`
	position: absolute;
	width: 15%;
	height: 55%;
	width: 250px;
	height: 450px;

	background-size: contain;
	background-repeat: no-repeat;

	filter: drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.1));

	transition: all 1s ease-out;
	will-change: transform;

	${props => (props.animateUpOut || props.animateDownOut) && `opacity: 0;`}
	${props => (props.animateDownIn || props.animateUpIn) && `opacity: 1;`}

	@media ${device.mobile} {
		width: 35%;
	}
`;

const PhoneImageOne = styled(PhoneImage)`
	background-image: url(${phone1});
	z-index: 5;
	top: 20%;
	left: 22%;

	transform: ${props =>
		!props.animateDownIn && !props.animateUpIn && props.isTopPosition
			? `translateY(400px);`
			: `translateY(-400px);`};

	${props =>
		(props.animateDownIn || props.animateUpIn) && `transform: translateY(0);`}
	${props => props.animateUpOut && `transform: translateY(400px);`}
	${props => props.animateDownOut && `transform: translateY(-400px);`}

	@media ${device.mobile} {
		top: 5%;
		left: 18%;
	}
`;

const PhoneImageTwo = styled(PhoneImage)`
	background-image: url(${phone2});
	left: 33%;
	top: 35%;
	z-index: 4;


	transform: ${props =>
		!props.animateDownIn && !props.animateUpIn && props.isTopPosition
			? `translateY(200px);`
			: `translateY(-200px);`};

	${props =>
		(props.animateDownIn || props.animateUpIn) && `transform: translateY(0);`}
	${props => props.animateUpOut && `transform: translateY(200px);`}
	${props => props.animateDownOut && `transform: translateY(-200px);`}

	@media ${device.mobile} {
		top: 13%;
		left: 43%;
	}
`;

const MissionTextContainer = styled.div`
	height: 100%;
	width: 35%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 10;
`;

const MissionTextBox = styled.div`
	font-size: 14px;
	line-height: 23px;
	font-weight: 100;

	div {
		padding: 25px 0 0 0;
	}
`;

const Mission = () => {
	const { next, direction } = useContext(PageContext);
	const isEnter = next === 'mission';
	const isExit = next !== 'mission';
	const [up, down] = [direction === 'up', direction === 'down'];

	const items = [
		`MySunshine is a 501c3 non-profit based in Colorado. The passion
		behind MySunshine comes from a group of individuals that have been
		personally impacted by pediatric cancer. It is their wish and
		intention to help improve the experience for other families going
		through such a challenging time.`,
		`Emotional support is usually well-offered for the pediatric cancer
		patient, but what about the other family members and loved ones
		that are impacted?`,
		`SHINE was created to help ALL of those affected on a family level.
		It gives everyone a place to find information specific to what
		THEY are dealing with. Shine helps connect loved ones with other
		groups or individuals facing similar issues. On SHINE, families
		are able to access the help and support of professionals who have
		volunteered their time and expertise. Their services are available
		24 hours a day, 7 days a week.`,
	];

	return (
		<MissionContainer>
			<PhonesImageContainer>
				<PhoneImageOne
					animateDownIn={isEnter && down}
					animateUpIn={isEnter && up}
					animateDownOut={isExit && down}
					animateUpOut={isExit && up}
					isTopPosition={down}
				/>
				<PhoneImageTwo
					animateDownIn={isEnter && down}
					animateUpIn={isEnter && up}
					animateDownOut={isExit && down}
					animateUpOut={isExit && up}
					isTopPosition={down}
				/>
			</PhonesImageContainer>
			<MissionTextContainer>
				<UnderlineTitle text="Mission" section="mission" />
				<MissionTextBox>
					<AnimateText textArray={items} section="mission" />
				</MissionTextBox>
			</MissionTextContainer>
		</MissionContainer>
	);
};

export default Mission;
