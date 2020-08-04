import React from "react";
import moment from "moment";

import {
	Container,
	Headline,
	Subtitle,
	ButtonContainer,
	TasksContainer,
	Title,
	TextContainer,
} from "./task-list.styles";

import { default as TaskItem } from "../task-item/task-item.container";
import { default as AddTaskButton } from "../add-task-button/add-task-button.container";

const today = new Date();

const TaskList = ({ tasks }) => {
	return (
		<Container>
			<Headline>
				<TextContainer>
					<Title>My Day</Title>
					<Subtitle>{moment(today).format("dddd, MMMM D")}</Subtitle>
				</TextContainer>
				<ButtonContainer>
					<AddTaskButton />
				</ButtonContainer>
			</Headline>

			<TasksContainer>
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</TasksContainer>
		</Container>
	);
};

export default TaskList;
