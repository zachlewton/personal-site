import React from 'react';
import styled from '@emotion/styled';

const Layout = ({ children }) => {
	return (
		<>
			<div className="container">{children}</div>
			<Footer />
		</>
	);
};

const Footer = ({ light }) => {
	return <StyledFooter light={light}>&trade; Copyright 2020</StyledFooter>;
};

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
