import React, { useState } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useSpring, animated } from 'react-spring';

// eslint-disable-next-line
import UnderlineTitle from 'src/components/UnderlineTitle';
// eslint-disable-next-line
import { device } from 'src/util';

import AnimateContainer from '../../../components/AnimateContainer';

const questions = [
	{
		question: 'What is the purpose of the SHINE Platform? ',
		answer:
			'The purpose of the platform is simply to focus on bringing emotional support to all members of a family (including loved ones) who are battling with a pediatric cancer diagnosis. Because we believe that when a child gets cancer, the whole family gets cancer (meaning everyone is at least affected emotionally).',
	},
	{
		question: 'Why does SHINE focus on the family instead of individual?',
		answer:
			'MySunshine believes in the power of the family unit and knows first-hand the effects that a pediatric cancer diagnosis has on all members and close loved ones of a family. We wanted to create a safe space for everyone to go and get help, talk to others, explore content, and find resources available for their own emotional and mental wellness.',
	},
	{
		question: 'Why is it called SHINE?',
		answer:
			'SHINE is derived from the name of the foundation which is MySunshine Foundation, whom the founders named after the song ‘You Are My Sunshine’. The name of the platform not only derives from the foundation’s name, but from the powerful connotation of the platform being able to ‘shine’ light, hope, education, and peace to the families using it.',
	},
	{
		question: 'How does SHINE work exactly?',
		answer:
			'The SHINE platform is fueled by partnerships that supply the content, volunteer peer support sections, resources and tools made available on the platform. The Getch Foundation also is building a similar platform that offers help for all individuals battling mental health. That platform has created a massive network of mental health and mental wellness resources, tools, and content that are also made available on the SHINE platform.',
	},
	{
		question: 'What is the grand vision of SHINE in terms of functionality?',
		answer:
			'SHINE is launching in 2020 with its Version 1, meaning that only a portion of the grand vision of SHINE will be made available at launch. This is to allow us and the Getch Foundation to better asses the needs of platform, to adjust and launch additional features in calculated states. There are currently a total of 4 versions planned to be released in stages through the end of 2022 at which time the majority of the platform will be complete.',
	},
	{
		question: 'Why is SHINE only focused on Pediatric Cancer?',
		answer:
			'Pediatric Cancer is a passion for the founding members of MySunshine Foundation due to personally being affected by it. SHINE will start with helping families battle the emotional strain of battling a pediatric cancer diagnosis, and eventually will move into helping families who are battling all types of cancer.',
	},
	{
		question:
			'Where is the SHINE platform available and does it have plans to expand?',
		answer:
			'SHINE has been built as currently an English only platform servicing families in the United States, Canada, and Lithuania. The intent for SHINE is to be a global platform, and will expand soon to all English-speaking countries and eventually into multiple other languages starting next with Spanish.',
	},
	{
		question: 'Where does money go within MySunshine?',
		answer:
			'Because the SHINE platform is paid for by the Getch Foundation, MySunshine is able to allocation more money to expenses that both improve the SHINE platform experience/expansion as well as other programs such as the annual family retreats we host some of our families.',
	},
	{
		question: 'How much of every dollar is spent on operating expenses?',
		answer:
			'We are extremely proud to say that 89% of every dollar donated to MySunshine goes to program expenses with only 11% used for operational expenses.',
	},
	{
		question: 'Who is MySunshine Foundation and Getch Foundation?',
		answer:
			'The Getch Foundation is the Pioneering Sponsor of MySunshine Foundation, undertaking the cost to develop and maintain the SHINE platform. This allows MySunshine Foundation to allocate more funds raised from the public to building out the experience on SHINE as well as make is available to as many families as possible.',
	},
];

const FAQContainer = styled.div`
	min-height: 100vh;
	flex: 1;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const FAQBox = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media ${device.mobile} {
		padding: 5%;

		> div {
			flex-direction: column;
		}
	}
`;

const QAContainer = styled.div`
	display: flex;
	padding: 20px 0 0 0;
`;

const QuestionsContainer = styled.div`
	width: 50%;

	@media ${device.mobile} {
		width: 100%;
	}
`;

const AnswerContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	align-content: center;
	width: 50%;

	@media ${device.mobile} {
		width: 100%;
	}
`;

const Question = styled.div`
	font-size: 30px;
	font-weight: 100;
	line-height: 40px;
	padding: 10px 0;
	cursor: pointer;

	@media ${device.mobile} {
		font-size: 22px;
	}

	> span {
		&.current {
			font-weight: bold;
			font-style: italic;
			text-decoration: underline;
		}
	}

	.question {
		&:hover {
			text-decoration: underline;
		}
	}
`;

const Answer = styled(animated.div)`
	margin: 0 auto;
	max-width: 400px;
	padding: 0 15%;
	font-weight: 100;
	font-size: 14px;
	line-height: 23px;
	text-decoration: none !important;

	@media ${device.mobile} {
		padding: 0;
		font-size: 16px;
	}
`;

const AnswerBlock = ({ questionIndex }) => {
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
			<AnimateContainer x={200} section="faq">
				<Answer
					style={animateAnswer}
					dangerouslySetInnerHTML={{
						__html: questions[answerIndex].answer,
					}}
				/>
			</AnimateContainer>
		</AnswerContainer>
	);
};

const QuestionList = ({ handleQuestionClick, questionIndex }) =>
	questions.map(({ question }, index) => (
		<Question onClick={() => handleQuestionClick(index)} key={index}>
			<span className={`question ${index === questionIndex && 'current'}`}>
				<AnimateContainer
					section="faq"
					x={-200}
					delay={500 + (index + 1) * 200}
				>
					{question}
				</AnimateContainer>
			</span>
			{isMobile && index === questionIndex && (
				<AnswerBlock questionIndex={questionIndex} />
			)}
		</Question>
	));

export default () => {
	const [questionIndex, changeQuestionIndex] = useState(0);
	const handleQuestionClick = i => changeQuestionIndex(i);

	return (
		<FAQContainer>
			<FAQBox>
				<UnderlineTitle
					text="Frequently Asked Questions"
					section="faq"
					y={-300}
				/>
				<QAContainer>
					<QuestionsContainer>
						<AnimateContainer x={-200} section="faq">
							<QuestionList
								handleQuestionClick={handleQuestionClick}
								questionIndex={questionIndex}
							/>
						</AnimateContainer>
					</QuestionsContainer>
					{!isMobile && <AnswerBlock questionIndex={questionIndex} />}
				</QAContainer>
			</FAQBox>
		</FAQContainer>
	);
};
