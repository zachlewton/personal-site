/** @jsx jsx */
import { css, jsx } from '@emotion/react';
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

const Footer = () => {
	return (
		<footer
			css={css`
				display: flex;
				justify-content: center;
				align-items: center;
				min-height: 100px;
				background: grey;
				margin: 2rem 0 0 0;
			`}
		>
			&trade; Copyright 2020
		</footer>
	);
};

// const StyledFooter = styled.footer`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	min-height: 100px;
// 	background: grey;
// 	margin: 2rem 0 0 0;
// `;

export default Layout;
