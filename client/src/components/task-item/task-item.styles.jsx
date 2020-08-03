import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background: #1b262c;
	border-radius: 8px;
	padding: 8px;
	margin: 10px 0;
	opacity: ${(props) => (props.isCompleted ? "0.8" : "1")};
`;

export const Content = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
`;

export const Description = styled.span`
	font-size: 1rem;
	color: #eee;
	text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;
