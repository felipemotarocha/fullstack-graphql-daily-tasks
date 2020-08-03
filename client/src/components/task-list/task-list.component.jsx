import React from "react";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";

import {
	Container,
	Headline,
	Subtitle,
	ButtonContainer,
	StyledButton,
	TasksContainer,
	Title,
} from "./task-list.styles";

import { default as TaskItem } from "../task-item/task-item.container";

const today = new Date();

const TaskList = ({ tasks }) => {
	return (
		<Container>
			<Headline>
				<Title>My Day</Title>
				<Subtitle>{moment(today).format("dddd, MMMM D")}</Subtitle>
			</Headline>

			<TasksContainer>
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} />
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
