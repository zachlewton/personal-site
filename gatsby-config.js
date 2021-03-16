const myCustomQueries = {
	xs: '(max-width: 950px)',
	sm: '(max-width: 1110px)',
	md: '(max-width: 1429px)',
	l: '(max-width: 300000000px)',

	portrait: '(orientation: portrait)',
};

module.exports = {
	siteMetadata: {
		title: `Zach Lewton Web Dev`,
		siteUrl: `https://nostalgic-mcclintock-9e28ff.netlify.app/`,
		description: `Personal site for Zach Lewton`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'uploads',
				path: `${__dirname}/static/images`,
			},
		},
		`gatsby-plugin-emotion`,
		{
			resolve: 'gatsby-plugin-breakpoints',
			options: {
				queries: myCustomQueries,
			},
		},
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'data',
				path: `${__dirname}/src/data`,
			},
		},
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: 'images',
		// 		path: `${__dirname}/src/images`,
		// 	},
		// },
		{
			resolve: `gatsby-transformer-sharp`,
			options: {
				// The option defaults to true
				checkSupportedExtensions: false,
			},
		},

		`gatsby-plugin-sharp`,
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
					{
						resolve: `gatsby-plugin-netlify-cms-paths`,
						options: {
							// Path to your Netlify CMS config file
							cmsConfig: `/static/admin/config.yml`,
						},
					},
				],
			},
		},
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Zach Lewton Web Development`,
				title: `Zach Lewton Web Development`,
				short_name: `ZachLewtonDev`,
				start_url: `/`,
				background_color: `#5b3e29`,
				theme_color: `#fdf5e6`,
				lang: `en`,
				description: `Website for Zach Lewton Web Development services and music`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `static/images/icon.png`, // This path is relative to the root of the site.
				crossOrigin: `use-credentials`,
			},
		},
		`gatsby-plugin-offline`,
	],
};
