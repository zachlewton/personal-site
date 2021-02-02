import React from 'react';
import { graphql, Link } from 'gatsby';
import PostCard from '../components/PostCard';
import Layout from '../components/Layout';

const index = ({ data }) => {
	return (
		<Layout>
			<h1>home page hello</h1>
			{data.allMarkdownRemark.edges.map(({ node: post }) => (
				<PostCard to={post.fields.slug}>
					<h3 className="title">{post.frontmatter.title}</h3>
					<p className="ttr">A lovely {post.timeToRead} minute read</p>
					<p className="excerpt">{post.excerpt}</p>
					<p className="date"> {post.frontmatter.date}</p>
				</PostCard>
			))}
		</Layout>
	);
};

export const HomepageQuery = graphql`
	query HomepageQuery {
		site {
			siteMetadata {
				title
				description
			}
		}

		allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
			edges {
				node {
					excerpt
					timeToRead
					frontmatter {
						title
						date
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default index;
