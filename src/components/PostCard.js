import styled from '@emotion/styled';
import { Link } from 'gatsby';

const PostCard = styled(Link)`
	display: block;
	margin: 0 0 2rem;
	color: var(--text);
	text-decoration: none;
	background: #f3eee4;
	padding: 1rem 1.5rem;
	border-radius: 5px;

	.title {
		margin: 0 0 0.3rem;
		font-size: 20px;
	}

	.ttr {
		margin: 0 0 0.7rem;
		font-size: 14px;
		color: #8c3b00;
	}
	.excerpt {
		margin: 0 0 0.5rem;
	}

	.date {
		margin: 0;
		display: inline-block;
		background-color: #726c68;
		color: oldlace;
		border-radius: 999px;
		padding: 3px 10px;
		font-size: 12px;
	}
`;

export default PostCard;
