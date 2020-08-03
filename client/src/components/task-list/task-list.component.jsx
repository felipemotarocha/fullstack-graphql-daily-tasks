import React from "react";
import AddIcon from "@material-ui/icons/Add";

import {
	Container,
	Headline,
	Subtitle,
	ButtonContainer,
	StyledButton,
	TasksContainer,
	Title,
} from "./task-list.styles";

import TaskItem from "../task-item/task-item.component";

const tasks = [
	{
		description: "Study Code",
		isCompleted: true,
	},
	{
		description: "Read",
		isCompleted: false,
	},
];

const TaskList = () => {
	return (
		<Container>
			<Headline>
				<Title>My Day</Title>
				<Subtitle>Monday, 3 August</Subtitle>
			</Headline>

			<TasksContainer>
				{tasks.map((task) => (
					<TaskItem task={task} />
				))}
			</TasksContainer>
			<ButtonContainer>
				<StyledButton
					color="primary"
					variant="contained"
					startIcon={<AddIcon />}
				>
					Add a Task
				</StyledButton>
			</ButtonContainer>
		</Container>
	);
};

export default TaskList;
