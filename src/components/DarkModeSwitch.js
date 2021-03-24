import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { ModeNight } from '@styled-icons/material';
import { LightUp } from '@styled-icons/entypo/LightUp';

const themeType = {
	dark: 'dark',
	light: 'light',
};

const DarkModeSwitch = () => {
	const [mode, setMode] = useState(() => {
		if (typeof window !== 'undefined') {
			const val = localStorage.getItem('theme');

			return val ? val : themeType.light;
		}
		return themeType.light;
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', mode);
		}
	}, [mode]);

	const toggleMode = () => {
		setMode(mode === themeType.light ? themeType.dark : themeType.light);
	};

	return (
		<Fragment>
			<Helmet>
				<body className={mode} />
			</Helmet>
			<div
				className="theme-mode"
				onClick={toggleMode}
				role="button"
				tabIndex="0"
				onKeyDown={toggleMode}
			>
				{mode === themeType.light ? <NightButton /> : <LightButton />}
			</div>
		</Fragment>
	);
};

export default DarkModeSwitch;

const LightButton = styled(LightUp)`
	align-self: flex-end;
	padding-left: 1vw;
	margin-top: 1vw;
	position: fixed;
	left: 0;
	top: 0;
	width: 70px;
`;

const NightButton = styled(ModeNight)`
	align-self: flex-end;
	padding-left: 1vw;
	margin-top: 1vw;
	position: fixed;
	left: 0;
	top: 0;
	width: 70px;
`;
