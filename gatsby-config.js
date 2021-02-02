module.exports = {
	plugins: [
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'data',
				path: `${__dirname}/src/data`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},

		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 5000,
						},
					},
				],
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Zach Lewton Web Development`,
				short_name: `ZachLewtonDev`,
				start_url: `/`,
				background_color: `#5b3e29`,
				theme_color: `#fdf5e6`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `src/images/icon.png`, // This path is relative to the root of the site.
				crossOrigin: `use-credentials`,
			},
		},
	],
};
