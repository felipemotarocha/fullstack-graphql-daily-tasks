import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const StyledButton = styled(Button)`
	margin-top: 20px;
`;

export const TextFieldContainer = styled.div`
	display: ${(props) => (props.isOpen ? "flex" : "none")};
	transition: all 350ms ease;
	position: absolute;
	bottom: 50px;
	width: 100%;
`;
