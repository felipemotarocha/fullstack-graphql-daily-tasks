import React from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { GET_TASKS } from "../../graphql/queries/task/task.queries";

import {
	Container,
	StyledButton,
	TextFieldContainer,
} from "./add-task-button.styles";

const StyledTextField = withStyles({
	root: {
		width: "100%",
		marginBottom: "10px",
		"& label.Mui-focused": {
			color: "#bbe1fa",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#bbe1fa",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#bbe1fa",
			},
			"&:hover fieldset": {
				borderColor: "#bbe1fa",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#bbe1fa",
			},
		},
	},
})(TextField);

const AddTaskButton = ({ newTask }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [description, setDescription] = useState("");

	return (
		<Container>
			<TextFieldContainer isOpen={isOpen}>
				<StyledTextField
					id="task-description"
					label="Description"
					variant="outlined"
					color="primary"
					InputLabelProps={{
						style: {
							color: "white",
						},
					}}
					inputProps={{
						style: {
							color: "white",
						},
					}}
					value={description}
					onChange={({ target: { value } }) => setDescription(value)}
				/>
				<IconButton
					onClick={() => {
						newTask({
							refetchQueries: [
								{
									query: GET_TASKS,
								},
							],
							variables: { description },
						});
						setIsOpen(false);
						setDescription("");
					}}
				>
					<AddIcon color="primary" />
				</IconButton>
			</TextFieldContainer>
			<StyledButton
				color="primary"
				variant="contained"
				startIcon={isOpen ? <CloseIcon /> : <AddIcon />}
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? "Cancel" : "Add a task"}
			</StyledButton>
		</Container>
	);
};

export default AddTaskButton;
