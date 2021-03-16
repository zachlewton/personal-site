import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export const Seo = ({ description, keywords, title, image, url, author }) => {
	return (
		<StaticQuery
			query={detailsQuery}
			render={(data) => {
				const metaDescription =
					description || data.site.siteMetadata.description;
				const metaTitle = title || data.site.siteMetadata.title;
				const metaAuthor = author || data.site.siteMetadata.author;
				const metaImage = image || data.site.siteMetadate.image;
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
