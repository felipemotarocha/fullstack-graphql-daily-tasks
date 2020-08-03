import React from "react";
import { useMutation } from "@apollo/client";

import AddTaskButton from "./add-task-button.component";

import { NEW_TASK } from "../../graphql/mutations/task/task.mutations";

const AddTaskButtonContainer = () => {
	const [newTask] = useMutation(NEW_TASK);

	return <AddTaskButton newTask={newTask} />;
};

export default AddTaskButtonContainer;
