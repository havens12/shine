import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Section from '../components/Section';

const NotFoundPage = () => (
	<Layout>
		<Section
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
			background="#FFEE80"
			fullscreen
		>
			Page not found
			<Link
				to="/"
				style={{ width: 'auto', textDecoration: 'underline', margin: '5% 0' }}
			>
				Back to MySunshine
			</Link>
		</Section>
	</Layout>
);

export default NotFoundPage;
