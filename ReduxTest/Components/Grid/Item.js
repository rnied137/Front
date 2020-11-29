import React from 'react';

import styled, { css } from 'styled-components';

const GridElement = styled.div`
	background-color: ${(props) => props.primary};
	display: flex;
	justify-content: center;
	padding: 0.5rem;
	border: 1px solid #efefef;
	border-radius: 4px;
	margin-bottom: 48px;
`;

export const Item = (props) => {
	return (
		<GridElement primary={props.primary}>
			{props.children}
			<p>qweqweqwes</p>
		</GridElement>
	);
};

export default Item;
