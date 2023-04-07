import React, { useState } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useSpring, animated } from 'react-spring';

// eslint-disable-next-line
import { device, flexUnit } from 'src/util';
// eslint-disable-next-line
import ButtonLink from 'src/components/ButtonLink';

import AnimateContainer from '../../../components/AnimateContainer';

const questions = [
	{
		link: 'intro',
		linkText: 'Become a SHINE Professional',
		question: 'Become a `SHINE Professional` on our platform',
		answer:
			'The Shine Platform relies heavily on volunteer hours from professionals ranging from therapists to financial advisors that can field questions or have conversations with individuals utilizing the platform. Utilize your skills or experiences to help a broad base of people from around the world.',
	},
	{
		link: 'intro',
		linkText: 'Become a Shine Ambassador',
		question: 'Become a Shine Ambassador',
		answer:
			'We encourage you to team up with us to help spread the word about mySunshine to the world! The ‘Shine’ platform will be reaching people on a global level. Become a Shine Ambassador in whatever way you want! You can host a fundraiser, donate your birthday, run a race, or utilize anything you are good at to help spread awareness and raise funds for all the people that will benefit from the Shine platform.',
	},
	{
		link: 'intro',
		linkText: 'Volunteer at our annual retreat',
		question: 'Volunteer at our annual retreat',
		answer:
			'Our annual retreat will be held in Colorado every summer. MySunshine is a new organization, and as such, our 1st Annual Family Retreat will be held in the summer of 2020. We welcome anyone who would be able to volunteer from a planning or hands-on level. All families at this retreat will have utilized the Shine platform and will then qualify for additional support.',
	},
	{
		link: 'intro',
		linkText: 'Volunteer at an organizational level',
		question: 'Volunteer at an organizational level',
		answer:
			'We are continuously seeking volunteers that are willing and able to share some of their time and talents to assist MySunshine from an administrative level. We need caring individuals to help with our annual Spring Fundraiser, assist with bettering our technology, improving or creating content for the Shine platform, and so on.',
	},
	{
		link: 'intro',
		linkText: 'Become a strategic partner',
		question: 'Strategic partnerships',
		answer:
			'Groups or organizations looking to supply content or distributions resources for the ‘Shine’ platform can do so while getting full recognition to the individual viewing the content. We built this platform to be a unique warehouse for collaboration. We encourage the sharing of resources on both ends to help as many individuals as possible.  Please join with us. It’s a big ‘win’ for all involved!',
	},
];

const GetInvolvedContainer = styled.div`
	min-height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	z-index: 10;
`;

const ItemsBox = styled.div`
	flex: 1;
	justify-content: space-around;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 10;

	@media ${device.mobile} {
		padding: 5%;
	}
`;

const ItemsContainer = styled.div`
	display: flex;
	width: 100%;

	> div {
		width: 50%;
	}

	@media ${device.mobile} {
		> div {
			width: 100%;
		}
	}
`;

const AnswerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	> div {
		width: 60%;
	}

	@media ${device.mobile} {
		> div {
			width: 100%;
		}
	}
`;

const Question = styled.div`
	line-height: 44px;
	padding: 15px 0;
	cursor: pointer;
	${flexUnit(8, 12, 42)}
	font-weight: 100;

	&:first-child {
		padding-top: 0;
	}

	&:hover {
		text-decoration: underline;
	}

	&.current {
		font-weight: bold;
		font-style: italic;
	}
`;

const Answer = styled.div`
	margin: 0 auto;
	font-size: 14px;
	line-height: 24px;
	font-weight: 100;
`;

const ActionLinkContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 50px;
	align-items: center;
	justify-content: space-between;
`;

const ActionLink = ({ link, linkText }) => {
	return (
		<ActionLinkContainer>
			<ButtonLink to={link} text={linkText} width="100%" />
		</ActionLinkContainer>
	);
};

const AnswerWrapper = ({ questionIndex }) => {
	const [answerIndex, setAnswer] = useState(questionIndex);
	const change = questionIndex !== answerIndex;

	const animateAnswer = useSpring({
		from: { opacity: change ? 1 : 0 },
		to: { opacity: change ? 0 : 1 },
		delay: 0,
		onRest: () => setAnswer(questionIndex),
	});

	return (
		<AnswerContainer>
			<animated.div style={animateAnswer}>
				<Answer>
					<AnimateContainer x={200} section="getInvolvedQA">
						{questions[answerIndex].answer}
					</AnimateContainer>
				</Answer>
				<AnimateContainer y={200} section="getInvolvedQA">
					<ActionLink
						link={questions[answerIndex].link}
						linkText={questions[answerIndex].linkText}
					/>
				</AnimateContainer>
			</animated.div>
		</AnswerContainer>
	);
};

const QuestionList = ({ handleQuestionClick, questionIndex }) =>
	questions.map(({ question }, index) => (
		<div key={question.replace(' ', '')}>
			<Question
				onClick={() => handleQuestionClick(index)}
				className={index === questionIndex && 'current'}
			>
				<AnimateContainer
					x={-200}
					section="getInvolvedQA"
					delay={400 + (index + 1) * 70}
				>
					{question}
				</AnimateContainer>
			</Question>
			{isMobile && index === questionIndex && (
				<AnswerWrapper questionIndex={questionIndex} />
			)}
		</div>
	));

const GetInvolved = () => {
	const [questionIndex, changeQuestionIndex] = useState(0);
	const handleQuestionClick = i => changeQuestionIndex(i);

	return (
		<GetInvolvedContainer>
			<ItemsBox>
				<ItemsContainer>
					<div>
						<QuestionList
							handleQuestionClick={handleQuestionClick}
							questionIndex={questionIndex}
						/>
					</div>
					{!isMobile && <AnswerWrapper questionIndex={questionIndex} />}
				</ItemsContainer>
			</ItemsBox>
		</GetInvolvedContainer>
	);
};

export default GetInvolved;
