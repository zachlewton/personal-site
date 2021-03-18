import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const WorkCard = (props) => {
	return (
		<WorkCardWrapper>
			<TextContainer>
				<h2>{props.node.title}</h2>
				<UrlLink href={props.node.url} target="_blank">
					{props.node.url}
				</UrlLink>
				<Desc>{props.node.description}</Desc>
			</TextContainer>
			<ImageContainer>
				<Img
					style={{ width: '100%' }}
					fluid={props.node.featured_image.childImageSharp.fluid}
				/>
			</ImageContainer>
		</WorkCardWrapper>
	);
};

const TextContainer = styled.div`
	width: 50%;
`;

const ImageContainer = styled.div`
	width: 50%;
`;

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
	display: flex;
	flex-direction: row;
	width: 100%;

	/* img {
		max-width: 50%;
	} */
`;

export default WorkCard;
