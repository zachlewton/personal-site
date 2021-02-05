import React, { useState } from 'react';

import styled from '@emotion/styled';

const Layout = ({ children }) => {
	// const [theme, toggleTheme] = useState('white');
	const [theme, toggleTheme] = useState(true);

	return (
		<RootWrapper theme={theme}>
			<Container>
				<button
					// onClick={() =>
					// 	theme === 'white' ? toggleTheme('red') : toggleTheme('white')
					// }

					onClick={() => toggleTheme(!theme)}
				>
					toggle theme
				</button>
				{children}
			</Container>
			<Footer />
		</RootWrapper>
	);
};

const Footer = ({ light }) => {
	return <StyledFooter light={light}>&trade; Copyright 2020</StyledFooter>;
};

const RootWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	/* background: ${({ theme }) => theme}; */
	background: ${({ theme }) => (theme ? 'var(--light)' : 'var(--dark)')};
`;

const Container = styled.div`
	flex: 1;

	margin: 0 auto;
	padding: 0 20px;
	width: 100%;
	max-width: 640px;
	font-size: 18px;
	line-height: 1.3;

	h1 {
		font-size: 38px;
		text-transform: capitalize;
		letter-spacing: 0.1ch;
		color: saddlebrown;
	}
`;

const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100px;
	margin: 2rem 0 0 0;
	background-color: ${(props) => (props.light ? `oldlace` : `#372e28`)};
	color: ${(props) => (props.light ? `#372e28` : `#f3eee4`)};
`;

export default Layout;
