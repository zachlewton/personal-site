import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Markdown = ({ data }) => {
	const { markdownRemark } = data;

	return (
		<Layout>
			<h1>{markdownRemark.frontmatter.title}</h1>
			<h2>{markdownRemark.frontmatter.description}</h2>
			<div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
		</Layout>
	);
};

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				description
				slug
				title
			}
		}
	}
`;

export default Markdown;
