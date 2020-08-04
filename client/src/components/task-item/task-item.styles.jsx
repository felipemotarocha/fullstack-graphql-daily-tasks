import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background: #1b1c25;
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
	color: #ebecf1;
	text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
	line-break: anywhere;
	transition: all 350ms ease;
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-self: flex-end;
	font-size: 0.8rem;
	margin-right: 5px;
	transition: all 300ms ease;
	color: #4bb543;
`;

export const ConcludedAt = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	margin-right: 5px;
`;

export const Time = styled.span`
	font-weight: 500;
	margin-left: 2px;
`;
