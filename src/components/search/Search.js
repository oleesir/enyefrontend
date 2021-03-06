import React from 'react';
import { StyledInput } from '../search/style';

const search = ({ handleChange }) => {
	return (
		<div>
			<StyledInput
				type='text'
				name='search'
				placeholder='Search for customers'
				onChange={handleChange}
			/>
		</div>
	);
};

export default search;
