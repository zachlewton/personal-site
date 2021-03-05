import React from 'react';
import { graphql } from 'gatsby';
import PostCard from '../components/PostCard';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const index = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<h1>
				zach <br /> lewton
			</h1>

			<ContactContainer>
				<a href="mailto: zach@zachlewton.dev">zach@zachlewton.dev</a>
				<a href="https://github.com/zachlewton" target="_blank">
					github
				</a>
				<a
					href="https://www.linkedin.com/in/zachary-lewton-aa584a1a2/"
					target="_blank"
				>
					LinkedIn
				</a>
			</ContactContainer>

			<p style={homeText}>
				{data.allMarkdownRemark.edges[0].node.frontmatter.description}
			</p>
			{/* {data.allMarkdownRemark.edges.map(({ node: post }) => (
				<PostCard to={post.fields.slug}>
					<h3 className="title">{post.frontmatter.title}</h3>
					<p className="ttr">A lovely {post.timeToRead} minute read</p>
					<p className="excerpt">{post.excerpt}</p>
					<p className="date"> {post.frontmatter.date}</p>
				</PostCard>
			))} */}
		</Layout>
	);
};

// const contactContainer = {
// 	maxWidth: '700px',
// 	width: '30vw',
// 	display: 'flex',
// 	justifyContent: 'space-between',
// 	fontSize: '1rem',
// };

const ContactContainer = styled.div`
	max-width: 700px;
	width: 30vw;
	display: flex;
	font-size: 1rem;
	padding: 1vw 0 1vw 5vw;

	a {
		margin: 0 2vw 0 0;
		text-decoration: none;
		color: inherit;
	}

	a:visited {
		color: inherit;
	}

	a:hover {
		/* -moz-transform: scale(1.05);
		-webkit-transform: scale(1.05);
		-o-transform: scale(1.05);
		-ms-transform: scale(1.05);
		-webkit-transform: scale(1.05); */
		transform: scale(1.05);

		-webkit-transition: transform 0.5s ease-in-out;
		-moz-transition: transform 0.5s ease-in-out;
		-ms-transition: transform 0.5s ease-in-out;
	}
`;

const homeText = {
	width: '50%',
	fontSize: '2rem',
	maxWidth: '713.812px',
	margin: '0',
};

export const HomepageQuery = graphql`
	query HomepageQuery {
		site {
			siteMetadata {
				title
				description
			}
		}

		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home_text/" } }) {
			edges {
				node {
					frontmatter {
						title
						description
					}
					id
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default index;
