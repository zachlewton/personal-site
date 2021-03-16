import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export const Seo = ({ description, keywords, title, image, url, author }) => {
	return (
		<StaticQuery
			query={detailsQuery}
			render={(data) => {
				const metaDescription = description;
				const metaTitle = title;
				const metaAuthor = author;
				const metaImage = image;
				const metaKeywords = keywords || [
					'zach lewton',
					'web developer',
					'web development',
					'frontend engineer',
					'frontend developer',
				];

				return (
					<Helmet
						title={title}
						meta={[
							{
								name: `description`,
								content: metaDescription,
							},
							{
								name: `author`,
								content: metaAuthor,
							},
							{
								property: `og:title`,
								content: metaTitle,
							},
							{
								property: `og:description`,
								content: metaDescription,
							},
							{
								property: `og:type`,
								content: `website`,
							},
							{
								property: `og:image`,
								content: metaImage,
							},
						].concat(
							metaKeywords && metaKeywords.length > 0
								? {
										name: `keywords`,
										content: metaKeywords.join(`, `),
								  }
								: []
						)}
					/>
				);
			}}
		/>
	);
};

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
				image
			}
		}
	}
`;
