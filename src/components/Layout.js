import React, { useState } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import { ModeNight } from '@styled-icons/material';
import { LightUp } from '@styled-icons/entypo/LightUp';

import styled from '@emotion/styled';

const Layout = ({ children }) => {
	// const [theme, toggleTheme] = useState('white');
	const [theme, toggleTheme] = useState(true);
	const breakpoints = useBreakpoint();

	return (
		<RootWrapper theme={theme}>
			<Container>
				{!breakpoints.xs && (
					<nav>
						<ul>
							<li>web dev </li>
							<a href="https://netnetnet.bandcamp.com/" target="_blank">
								<li>music</li>
							</a>
						</ul>
					</nav>
				)}

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
	/* ${({ theme }) => theme && `color: var(--textLight)`}
	${({ theme }) => !theme && `color: var(--textDark)`} */

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
	padding-right: 1vw;
`;

const NightButton = styled(ModeNight)`
	align-self: flex-end;
	padding-right: 1vw;
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
		color: saddlebrown;
		margin: 0;
		line-height: 9rem;
	}

	nav {
		width: 100%;
		height: 130px;

		ul {
			display: flex;
			justify-content: flex-end;
			li {
				list-style: none;
				padding: 0 0 0 50px;
				font-size: 3.5rem;
			}
		}
	}
`;

export default Layout;
