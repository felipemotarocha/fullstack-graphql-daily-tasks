import React from "react";

import { Container, Headline, Subtitle } from "./task-list.styles";

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
			<Headline>My Day</Headline>
			<Subtitle>Monday, 3 August</Subtitle>
			{tasks.map((task) => (
				<TaskItem task={task} />
			))}
		</Container>
	);
};

export default TaskList;
