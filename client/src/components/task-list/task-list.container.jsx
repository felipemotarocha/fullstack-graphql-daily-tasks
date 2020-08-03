import React from "react";
import { useQuery } from "@apollo/client";

import { GET_TASKS } from "../../graphql/queries/task/task.queries";

import TaskList from "./task-list.component";

const TaskListContainer = () => {
	const { loading, data } = useQuery(GET_TASKS);

	if (loading) return "Loading...";

	return <TaskList tasks={data.tasks} />;
};

export default TaskListContainer;
