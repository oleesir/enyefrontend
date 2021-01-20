import styled from 'styled-components';

export const StyledPagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0;
	bottom: 0;
	width: 60%;
`;

export const StyledLinks = styled.a`
	color: black;
	float: left;
	font-size: 18px;
	padding: 16px 32px;
	text-decoration: none;
	border: 1px solid #ddd;
	&:hover {
		color: #fff;
		background-color: #fd8234;
	}
`;
