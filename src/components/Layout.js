import React, { useState } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Link } from 'gatsby';
import { ModeNight } from '@styled-icons/material';
import { LightUp } from '@styled-icons/entypo/LightUp';
import { useLocation } from '@reach/router';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';

const Layout = ({ children }) => {
	// const [theme, toggleTheme] = useState('white');
	const breakpoints = useBreakpoint();

	const location = useLocation();
	console.log(location);
	const [theme, toggleTheme] = useState(true);

	const siteMetadata = {
		title: `Zach Lewton Web Dev`,
		url: `https://www.zachlewton.dev/`,
		image: 'static/images/icon.png',
		author: 'zach lewton',
		description: `Website for Zach Lewton Web Development services and music`,
	};

	return (
		<RootWrapper theme={theme}>
			<Helmet>
				<title>{siteMetadata.title}</title>
				<meta name="description" content={siteMetadata.description} />

				<meta
					name="keywords"
					content="zach lewton, web development, web developer, react, react developer, frontend developer, frontend development"
				/>
				<meta name="og:title" content={siteMetadata.title} />
				<meta name="og:type" content="website" />
				<meta name="og:description" content={siteMetadata.description} />
				<meta name="og:image" content={siteMetadata.image} />
				<meta name="og:locale" content="en" />
				<meta name="og:url" content={siteMetadata.url} />
				<link rel="canonical" content={siteMetadata.url} />
			</Helmet>
			<Container>
				<nav>
					<ul
						style={
							breakpoints.xs
								? { justifyContent: 'flex-start' }
								: { justifyContent: 'flex-end' }
						}
					>
						{location.pathname == '/' ? (
							<Link to="/work">
								<li>web dev </li>
							</Link>
						) : (
							<Link to="/">
								<li>home </li>
							</Link>
						)}

						<a href="https://netnetnet.bandcamp.com/" target="_blank">
							<li>music</li>
						</a>
					</ul>
				</nav>

				{children}
			</Container>
			{!theme ? (
				<LightButton size="50" onClick={() => toggleTheme(!theme)} />
			) : (
				<NightButton size="50" onClick={() => toggleTheme(!theme)} />
			)}

			{/* <button
				// onClick={() =>
				// 	theme === 'white' ? toggleTheme('red') : toggleTheme('white')
				// }

				
			>
				toggle theme
			</button> */}
		</RootWrapper>
	);
};

const RootWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	background: ${({ theme }) => (theme ? 'var(--light)' : 'var(--dark)')};
	padding: 0 0 3px 0;

	color: ${({ theme }) => (theme ? 'var(--textLight)' : 'var(--textDark)')};

	button {
		width: 50px;
	}

	a {
		text-decoration: none;
	}

	a:visited {
		color: inherit;
	}
	svg {
		cursor: pointer;
	}
`;

const LightButton = styled(LightUp)`
	align-self: flex-end;
	padding-left: 1vw;
	position: fixed;
	left: 0;
	top: 0;
`;

const NightButton = styled(ModeNight)`
	align-self: flex-end;
	padding-left: 1vw;
	position: fixed;
	left: 0;
	top: 0;
`;

const Container = styled.div`
	flex: 1;

	margin: 0 auto;
	padding: 0 20px 0 7.5vw;
	width: 100%;
	/* max-width: 640px; */
	/* font-size: 18px; */
	line-height: 1.3;

	h1 {
		font-size: 10rem;
		text-transform: lowercase;
		letter-spacing: 0.1ch;
		color: #274c77;
		margin: 0;
		line-height: 9rem;
	}

	h2 {
		font-size: 4rem;
		text-transform: lowercase;
		letter-spacing: 0.1ch;
		color: #274c77;
		margin: 0;
		/* line-height: 9rem; */
	}

	nav {
		width: 100%;
		height: 130px;
		padding: 0 0 0 0;

		ul {
			display: flex;

			li {
				list-style: none;
				padding: 0 0 0 50px;
				font-size: 3.5rem;
			}
		}
	}
`;

export default Layout;
