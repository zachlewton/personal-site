import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

const index = ({ data }) => {
	return (
		<Layout>
			<h1>home page hello</h1>
			<Img fluid={data.file.childImageSharp.fluid} alt="snow over a car" />
		</Layout>
	);
};

export const HomepageQuery = graphql`
	query HomepageQuery {
		file(relativePath: { eq: "snowImage.jpg" }) {
			childImageSharp {
				fixed(width: 800) {
					...GatsbyImageSharpFixed
				}
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default index;
