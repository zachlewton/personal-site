import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import WorkCard from '../components/WorkCard';

const work = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			{data.allMarkdownRemark.nodes.map((node) => (
				<WorkCard node={node.frontmatter} />
			))}
		</Layout>
	);
};

export const WorkQuery = graphql`
	query WorkQuery {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/web_dev/" } }) {
			nodes {
				frontmatter {
					description
					title
					url
					featured_image {
						childImageSharp {
							fluid(maxWidth: 2000, quality: 100) {
								...GatsbyImageSharpFluid
								...GatsbyImageSharpFluidLimitPresentationSize
							}
						}
					}
				}
			}
		}
	}
`;

export default work;
