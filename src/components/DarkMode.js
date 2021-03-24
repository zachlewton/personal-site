// import React, { useEffect, useState } from 'react';
// import { ModeNight } from '@styled-icons/material';
// import { LightUp } from '@styled-icons/entypo/LightUp';
// import styled from '@emotion/styled';

// const DarkMode = () => {
// 	// if (localStorage) {
// 	// 	theme = localStorage.getItem('theme');
// 	// }
// 	let clickedClass = 'clicked';
// 	const body = document.body;
// 	const lightTheme = 'light';
// 	const darkTheme = 'dark';
// 	let theme;

// 	// const getMode = () => {
// 	// 	return localStorage.getItem('theme')
// 	// 		? localStorage.getItem('theme')
// 	// 		: 'light';
// 	// };

// 	const [mode, setMode] = useState(() => {
// 		// check for Gatsby and NodeJS
// 		if (typeof window !== 'undefined') {
// 			const val = localStorage.getItem('theme');
// 			return val ? JSON.parse(val) : 'light';
// 		}
// 		return 'light';
// 	});

// 	// const [mode, setMode] = useState(getMode);

// 	if (theme === lightTheme || theme === darkTheme) {
// 		body.classList.add(theme);
// 	} else {
// 		body.classList.add(lightTheme);
// 	}

// 	const switchTheme = (e) => {
// 		if (theme === darkTheme) {
// 			body.classList.replace(darkTheme, lightTheme);
// 			e.target.classList.remove(clickedClass);
// 			localStorage.setItem('theme', 'light');
// 			theme = lightTheme;
// 			setMode('light');
// 		} else {
// 			body.classList.replace(lightTheme, darkTheme);
// 			e.target.classList.remove(clickedClass);
// 			localStorage.setItem('theme', 'dark');
// 			theme = darkTheme;
// 			setMode('dark');
// 		}
// 	};

// 	return mode === 'dark' ? (
// 		<LightButton size="50" onClick={(e) => switchTheme(e)} />
// 	) : (
// 		<NightButton size="50" onClick={(e) => switchTheme(e)} />
// 	);
// };

// export default DarkMode;

// // {!theme ? (
// //     <LightButton size="50" onClick={() => toggleTheme(!theme)} />
// // ) : (
// //     <NightButton size="50" onClick={() => toggleTheme(!theme)} />
// // )}
// const LightButton = styled(LightUp)`
// 	align-self: flex-end;
// 	padding-left: 1vw;
// 	position: fixed;
// 	left: 0;
// 	top: 0;
// `;

// const NightButton = styled(ModeNight)`
// 	align-self: flex-end;
// 	padding-left: 1vw;
// 	position: fixed;
// 	left: 0;
// 	top: 0;
// `;
