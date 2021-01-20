import React from 'react';
import { StyledCard, StyledInfo } from '../card/style';

export const Card = ({
	profile: { Email, FirstName, LastName, Gender, PaymentMethod },
}) => {
	return (
		<StyledCard>
			<StyledInfo>FirstName: {FirstName}</StyledInfo>
			<StyledInfo>LastName: {LastName}</StyledInfo>
			<StyledInfo>Email: {Email}</StyledInfo>
			<StyledInfo>Gender: {Gender}</StyledInfo>
			<StyledInfo>PaymentMethod: {PaymentMethod}</StyledInfo>
		</StyledCard>
	);
};

export default Card;
