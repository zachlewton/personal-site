import React from 'react';

function Generic({ pageContext }) {
	return (
		<div>
			<h1>{pageContext.title}</h1>
			<p>{pageContext.description}</p>
		</div>
	);
}

export default Generic;
