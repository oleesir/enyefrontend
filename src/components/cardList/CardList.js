import React from 'react';
import Card from '../card/Card';
import { StyledCardList } from './style';

export const CardList = ({ profiles }) => {
	console.log(' PROFILES CARDLIST', profiles);
	return (
		<StyledCardList>
			{profiles &&
				profiles.map((profile, i) => <Card key={i} profile={profile} />)}
		</StyledCardList>
	);
};

export default CardList;
