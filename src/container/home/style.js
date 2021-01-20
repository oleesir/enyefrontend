import styled from 'styled-components';

export const StyledHome = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
`;

export const StyledContent = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	border: 1px solid blue;
	align-items: center;
`;

export const CenterSearchInput = styled.div`
	padding-top: 30px;
	width: 100%;
	text-align: center;
`;

export const CheckBoxForm = styled.div`
	width: 40%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 10px;
`;

export const CheckBox = styled.label`
	display: flex;
	align-items: center;
`;

export const CheckBoxInput = styled.input`
	height: 20px;
	width: 20px;
	-webkit-appearance: none;
	-moz-appearance: none;
	-o-appearance: none;
	appearance: none;
	border: 1px solid #34495e;
	border-radius: 4px;
	outline: none;
	transition-duration: 0.3s;
	background-color: #fff;
	cursor: pointer;
	&:checked {
		border: 1px solid #41b883;
		background-color: #fd8234;
	}
`;

export const CheckBoxSpan = styled.span`
	color: #34495e;
	padding: 0.5rem 0.25rem;
`;
