import React from 'react';
import { SearchBtn } from './style';

export const SearchButton = ({ handleClick }) => {
	return <SearchBtn onClick={handleClick}>Search</SearchBtn>;
};

export default SearchButton;
