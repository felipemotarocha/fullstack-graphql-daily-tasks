import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
	color: white;
	height: 95%;
	position: relative;
	display: grid;
	grid-template-rows: 12% 83% 5%;
`;

export const Headline = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	margin: 10px 0;
	border-radius: 8px;
`;

export const StyledButton = styled(Button)`
	width: 100%;
`;
