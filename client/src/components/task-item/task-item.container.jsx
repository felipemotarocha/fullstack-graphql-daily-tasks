import React from "react";
import { useMutation } from "@apollo/client";

import TaskItem from "./task-item.component";

import { TOGGLE_TASK_STATUS } from "../../graphql/mutations/task/task.mutations";

const TaskItemContainer = ({ task }) => {
	const { id } = task;
	const [toggleTaskStatus] = useMutation(TOGGLE_TASK_STATUS, {
		variables: { id },
	});

	return <TaskItem task={task} toggleTaskStatus={toggleTaskStatus} />;
};

export default TaskItemContainer;
