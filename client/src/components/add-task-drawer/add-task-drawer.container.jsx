import React from "react";
import { useMutation } from "@apollo/client";

import AddTaskDrawer from "./add-task-drawer.component";

import { NEW_TASK } from "../../graphql/mutations/task/task.mutations";

const AddTaskDrawerContainer = ({ isOpen }) => {
	const [newTask] = useMutation(NEW_TASK);

	return <AddTaskDrawer isOpen={isOpen} newTask={newTask} />;
};

export default AddTaskDrawerContainer;
