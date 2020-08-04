import React from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

import { default as AddTaskDrawer } from "../add-task-drawer/add-task-drawer.container";

import { StyledButton } from "./add-task-button.styles";

const AddTaskButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<StyledButton
				color="primary"
				variant="contained"
				startIcon={isOpen ? <CloseIcon /> : <AddIcon />}
				onClick={() => setIsOpen(!isOpen)}
				size="small"
			>
				{isOpen ? "Cancel" : "Add a task"}
			</StyledButton>
			<AddTaskDrawer isOpen={isOpen} />
		</>
	);
};

export default AddTaskButton;
