// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StyledCard } from './styled/Card.styled';

export const Card = ({ item: { id, title, body, image } }) => {
	return (
		<StyledCard layout={id % 2 === 0 ? 'row-reverse' : 'undefined'}>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div>
				<img src={`./images/${image}`} alt='imge' />
			</div>
		</StyledCard>
	);
};
