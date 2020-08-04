import React from "react";
import { useMutation } from "@apollo/client";

import TaskItem from "./task-item.component";

import {
	TOGGLE_TASK_STATUS,
	DELETE_TASK,
} from "../../graphql/mutations/task/task.mutations";

const TaskItemContainer = ({ task, isEditable }) => {
	const { id } = task;
	const [toggleTaskStatus] = useMutation(TOGGLE_TASK_STATUS, {
		variables: { id },
	});
	const [deleteTask] = useMutation(DELETE_TASK, {
		variables: { id },
	});

	return (
		<TaskItem
			task={task}
			toggleTaskStatus={toggleTaskStatus}
			deleteTask={deleteTask}
			isEditable={isEditable}
		/>
	);
};

export default TaskItemContainer;
