import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	background-color: #1b1c25;
	box-shadow: 5px 9px 31px -25px rgba(0, 0, 0, 0.75);
	position: fixed;
	left: 0;
	bottom: 0;
	border-radius: 9px;
	color: white;
	padding: 10px;
	z-index: 5;
`;

export const Headline = styled.span`
	font-size: 1.1rem;
	font-weight: 400;
`;

export const TextFieldContainer = styled.div`
	display: flex;
	align-items: center;
`;
