import React from 'react';
import { StyledPagination, StyledLinks } from './style';

export const Pagination = ({ profilesPerPage, totalProfiles, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<>
			<StyledPagination>
				{pageNumbers.map((number, i) => (
					<StyledLinks key={i} onClick={() => paginate(number)} href='!#'>
						{number}
					</StyledLinks>
				))}
			</StyledPagination>
		</>
	);
};

export default Pagination;
