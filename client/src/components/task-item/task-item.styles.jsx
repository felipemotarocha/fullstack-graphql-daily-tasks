import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background: #1b262c;
	border-radius: 8px;
	padding: 5px;
	margin: 5px 0;
	opacity: ${(props) => (props.isCompleted ? "0.8" : "1")};
	align-items: center;
	transition: all 350ms ease;
`;

export const Content = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
`;

export const Description = styled.span`
	font-size: 0.9rem;
	color: #eee;
	text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
	line-break: anywhere;
	transition: all 350ms ease;
`;

export const ConcludedAt = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-self: flex-end;
	font-size: 0.8rem;
	margin-right: 5px;
	opacity: ${(props) => (props.isCompleted ? "100%" : "0")};
	transition: all 300ms ease;
`;

export const Text = styled.span`
	text-align: center;
`;

export const Time = styled.span`
	font-weight: 400;
`;
