import React from 'react';
import Layout from '../components/Layout';

const Generic = ({ pageContext }) => {
	return (
		<Layout>
			<h1>{pageContext.title}</h1>
			<h2>Home Page</h2>
			<p>{pageContext.description}</p>
		</Layout>
	);
};

export default Generic;
