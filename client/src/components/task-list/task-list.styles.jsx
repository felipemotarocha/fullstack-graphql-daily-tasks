import styled from "styled-components";

export const Container = styled.div`
	color: white;
	height: 97%;
	display: flex;
	flex-direction: column;
`;

export const Headline = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 5px 0;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.span`
	font-size: 2.2rem;
	font-weight: 500;
`;

export const Subtitle = styled.span`
	font-size: 1.1rem;
`;

export const TasksContainer = styled.div`
	overflow-y: scroll;
	border-radius: 8px;
`;

export const ButtonContainer = styled.div`
	align-self: flex-end;
`;

export const EditButton = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	margin: 10px;
`;
