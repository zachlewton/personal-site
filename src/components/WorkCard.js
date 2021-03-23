import React from 'react';
import styled, { css } from '@emotion/styled';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const WorkCard = (props) => {
	const breakpoints = useBreakpoint();
	console.log(breakpoints);

	return (
		<WorkCardWrapper
			style={
				breakpoints.xs ? { flexDirection: 'column' } : { flexDirection: 'row' }
			}
		>
			<TextContainer>
				<h2>{props.node.title}</h2>
				<UrlLink href={props.node.url} target="_blank">
					{props.node.url}
				</UrlLink>
				<Desc>{props.node.description}</Desc>
			</TextContainer>
			<ImageContainer
				style={breakpoints.xs ? { width: '100%' } : { width: '75%' }}
			>
				<Img
					style={{ width: '100%', border: '2px solid grey' }}
					fluid={props.node.featured_image.childImageSharp.fluid}
				/>
			</ImageContainer>
		</WorkCardWrapper>
	);
};

const TextContainer = styled.div`
	width: 50%;
	padding: 0 2vw 0 0;
`;

const ImageContainer = styled.div``;

const UrlLink = styled.a`
	opacity: 0.7;
	color: #8b8c89;
	margin: 7px 0 0 0;
`;

const Desc = styled.p`
	margin: 1vw 0 1vw 0;
	font-size: 2rem;
	max-width: 700px;
`;

const WorkCardWrapper = styled.div`
	margin: 0 0 10vw 0;
	padding: 0 8vw 0 8vw;
	display: flex;

	width: 100%;
`;

export default WorkCard;
