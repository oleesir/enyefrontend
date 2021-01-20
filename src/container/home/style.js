import styled from 'styled-components';

export const StyledHome = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #5e468a;
	height: 100vh;
`;

export const StyledContent = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #5e468a;
	height: 100vh;
	overflow: scroll;
`;

export const CenterSearchInput = styled.div`
	padding-top: 30px;
	width: 100%;
	text-align: center;
`;

export const CheckBoxForm = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 10px;
	> p {
		color: #eae9ee;
		font-size: 25px;
	}
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
	color: #eae9ee;
	padding: 0.5rem 0.25rem;
`;

export const StyledFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	border-radius: 5px;
	background-color: #f0f0f0;
`;
