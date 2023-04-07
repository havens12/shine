import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';

import PageContext, { PageProvider } from '../../pageContext';
import { FullpageProvider } from '../../fullpageContext';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import MouseWave from '../../components/MouseWave';

import IntroText from './IntroText';
import IntroTextAnimation from './IntroText/animations';
import App from './App';
import AppAnimation from './App/animations';
import SignUp from './SignUp';
import Welcome from './Welcome';
import Camp from './Camp';
import CampAnimations from './Camp/animations';
import TextBox from './TextBox';
import TextBoxAnimations from './TextBox/animations';
import Mission from './Mission';
import MissionAnimation from './Mission/animations';
import Partner from './Partner';
import Contact from './Contact';
import FAQ from './FAQ';
import Donate from './Donate';
import GetInvolved from './GetInvolved';
import GetInvolvedTitle from './GetInvolved/Title';
import GetInvolvedAnimations from './GetInvolved/animations';

const SectionsContainer = styled.div`
	height: 100%;
`;

const Page = React.memo(({ moveTo, moveSectionUp, moveSectionDown }) => (
	<FullpageProvider
		value={{
			moveTo,
			moveSectionUp,
			moveSectionDown,
		}}
	>
		<ReactFullpage.Wrapper>
			<SectionsContainer>
				<Section background="#FFEE80" fullscreen>
					<IntroTextAnimation />
					<IntroText />
				</Section>
				<Section background="#FFEE80" fullscreen>
					<Welcome />
				</Section>
				<Section
					background="#FFEE80"
					className="fp-auto-height-responsive scroll"
				>
					<AppAnimation />
					<App />
				</Section>
				<Section background="#FFEE80" className="fp-auto-height-responsive">
					<SignUp />
					<MouseWave bottom color="#FFEE80" background="#F3F7FA" />
				</Section>
				<Section background="#F3F7FA" fullscreen>
					<CampAnimations />
					<Camp />
				</Section>
				<Section background="#F3F7FA" fullscreen>
					<TextBoxAnimations />
					<TextBox />
				</Section>
				<Section background="#F3F7FA" fullscreen>
					<MissionAnimation />
					<Mission />
				</Section>
				<Section background="#F3F7FA" className="fp-auto-height-responsive">
					<Partner />
				</Section>
				<Section
					background="#FFEE80"
					fullscreen
					className="fp-auto-height-responsive"
				>
					<GetInvolvedAnimations />
					<GetInvolvedTitle />
					<MouseWave top color="#FFEE80" backgroud="#F3F7FA" />
				</Section>
				<Section background="#FFEE80">
					<GetInvolved />
				</Section>
				<Section background="#FFEE80" fullscreen>
					<Contact />
				</Section>
				<Section background="#FFEB66" fullscreen>
					<FAQ />
					<MouseWave bottom color="#FFEB66" background="#f3f3f3" />
				</Section>
				<Section background="#f3f3f3">
					<Donate />
				</Section>
				<Section background="#f3f3f3" className="fp-auto-height-responsive">
					<Footer />
				</Section>
			</SectionsContainer>
		</ReactFullpage.Wrapper>
	</FullpageProvider>
));

const Fullpage = () => {
	const { setCurrent, setNext, setDirection, setLoaded } = useContext(
		PageContext,
	);

	return (
		<ReactFullpage
			licenseKey="2D5056A6-3C3F4C74-9A2D0ED5-9AAA9318"
			afterLoad={(origin, destination) => {
				setCurrent(destination.anchor);
				setLoaded(true);
			}}
			onLeave={(origin, destination, direction) => {
				setNext(destination.anchor);
				setDirection(direction);
			}}
			responsiveWidth={1280}
			anchors={[
				'intro',
				'welcome',
				'app',
				'signUp',
				'camp',
				'textBox',
				'mission',
				'partner',
				'getInvolved',
				'getInvolvedQA',
				'contact',
				'faq',
				'donate',
				'footer',
			]}
			animateAnchor={false}
			scrollingSpeed={1750}
			fitToSection={false}
			verticalCentered={false}
			normalScrollElements=".scroll"
			fixedElements=".fixed"
			slideSelector="._slide"
			render={({ fullpageApi }) => (
				<Page
					moveTo={fullpageApi && fullpageApi.moveTo}
					moveSectionUp={fullpageApi && fullpageApi.moveSectionUp}
					moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
				/>
			)}
		/>
	);
};

export default () => {
	const [loaded, setLoaded] = useState(false);
	const [next, setNext] = useState('');
	const [current, setCurrent] = useState('');
	const [direction, setDirection] = useState('down');

	return (
		<PageProvider
			value={{
				current,
				setCurrent,
				next,
				setNext,
				direction,
				setDirection,
				loaded,
				setLoaded,
			}}
		>
			<Layout>
				{loaded && <Header className="fixed" />}
				<Fullpage />
			</Layout>
		</PageProvider>
	);
};
