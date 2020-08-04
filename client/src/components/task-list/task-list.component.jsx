import React, { useState } from "react";
import moment from "moment";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";

import {
	Container,
	Headline,
	Subtitle,
	ButtonContainer,
	TasksContainer,
	Title,
	TextContainer,
	EditButton,
} from "./task-list.styles";

import { default as TaskItem } from "../task-item/task-item.container";
import { default as AddTaskButton } from "../add-task-button/add-task-button.container";

const today = new Date();

const TaskList = ({ tasks }) => {
	const [isEditable, setIsEditable] = useState(false);
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
					<TaskItem key={task.id} task={task} isEditable={isEditable} />
				))}
			</TasksContainer>
			<EditButton onClick={() => setIsEditable(!isEditable)}>
				<Fab color="secondary" aria-label="edit">
					{isEditable ? <CloseIcon /> : <EditIcon />}
				</Fab>
			</EditButton>
		</Container>
	);
};

export default TaskList;
