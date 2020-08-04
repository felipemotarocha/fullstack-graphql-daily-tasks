import React, { useState } from "react";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

import { GET_TASKS } from "../../graphql/queries/task/task.queries";
import { Container, TextFieldContainer } from "./add-task-drawer.styles";

const StyledTextField = withStyles({
	root: {
		width: "100%",
		"& label.Mui-focused": {
			color: "#effffb",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#effffb",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#effffb",
			},
			"&:hover fieldset": {
				borderColor: "#effffb",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#effffb",
			},
		},
	},
})(TextField);

const AddTaskDrawer = ({ isOpen, newTask }) => {
	const [description, setDescription] = useState("");

	return (
		<Slide direction="up" in={isOpen} mountOnEnter>
			<Container>
				<TextFieldContainer>
					<StyledTextField
						id="task-description"
						label="Description"
						variant="outlined"
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
						size="small"
						autoFocus
					/>
					<IconButton
						onClick={() => {
							if (description) {
								newTask({
									refetchQueries: [
										{
											query: GET_TASKS,
										},
									],
									variables: { description },
								});
								setDescription("");
							} else {
								alert("Please insert a description for your note.");
							}
						}}
						style={{ color: "#effffb" }}
					>
						<AddIcon />
					</IconButton>
				</TextFieldContainer>
			</Container>
		</Slide>
	);
};

export default AddTaskDrawer;
