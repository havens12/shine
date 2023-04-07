import React, { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';

// eslint-disable-next-line
import ButtonLink from 'src/components/ButtonLink';

// eslint-disable-next-line
import { device, flexUnit } from 'src/util';
import animationData from '../../../assets/animationData/waveLoop.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid meet',
	},
};

const ContactSectionWrapper = styled.div`
	display: flex;
	max-width: 100vw;
	height: auto;
	flex-direction: column;

	@media ${device.mobile} {
		align-items: flex-start;
	}
`;

const ContactContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	padding: 0 26%;
	z-index: 1;

	@media ${device.mobile} {
		align-items: flex-start;
		padding: 0 10%;
	}
`;

const WavesAnimationContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: none;
	z-index: 0;

	* {
		fill: #ffeb66;
	}

	svg {
		display: block;
	}

	@media ${device.mobile} {
		display: none;
	}
`;

const ContactFormTitle = styled.div`
	width: 100%;
	margin: 0 0 5% 0;
	${flexUnit(6, 14, 72)}

	line-height: 85px;
	text-align: left;

	.contact {
		font-weight: 900;
	}

	.us {
		font-style: italic;
		font-weight: 100;
	}
`;

const FormContainer = styled.div`
	width: 100%;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const InputField = styled.input`
	width: 100%;
	margin: 15px;
	padding: 10px 0;
	background: none;
	border: 0;
	border-bottom: 1px #000000 solid;
	color: #000000;
	font-size: 14px;
	line-height: 24px;

	&::placeholder {
		color: #000000;
	}

	&:invalid {
		outline: none;
		box-shadow: none;
	}
`;

const Form = () => {
	const [values, setValues] = useState({ name: '', email: '', message: '' });

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	return (
		<form method="post">
			<InputField
				name="name"
				placeholder="Full name"
				onChange={handleInputChange}
				value={values.name}
				required
			/>
			<InputField
				type="email"
				name="email"
				placeholder="E-mail address"
				onChange={handleInputChange}
				value={values.email}
				required
			/>
			<InputField
				name="message"
				placeholder="Message"
				onChange={handleInputChange}
				value={values.message}
				required
			/>
			<ButtonLink onClick={() => console.log('Submit form')} width="100%" />
		</form>
	);
};

const Contact = () => (
	<ContactSectionWrapper>
		<ContactContainer>
			<ContactFormTitle>
				<span className="contact">Contact</span>
				&nbsp;
				<span className="us">Us</span>
			</ContactFormTitle>
			<FormContainer>
				<Form />
			</FormContainer>
		</ContactContainer>
		<WavesAnimationContainer>
			<Lottie options={defaultOptions} style={{ fill: 'black' }} />
		</WavesAnimationContainer>
	</ContactSectionWrapper>
);

export default Contact;
