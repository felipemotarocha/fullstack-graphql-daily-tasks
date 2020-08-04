import React from "react";
import { useQuery, useMutation } from "@apollo/client";

import {
	GET_CONFIRM_TASK_DELETE_OPEN,
	GET_TASKS,
} from "../../graphql/queries/task/task.queries";
import { confirmTaskDeleteOpenVar } from "../../graphql/cache";
import { DELETE_TASK } from "../../graphql/mutations/task/task.mutations";

import ConfirmTaskDeleteDialog from "./confirm-task-delete-dialog.component";

const ConfirmTaskDeleteContainer = ({ id }) => {
	const {
		data: {
			confirmTaskDeleteOpen: { isOpen },
		},
	} = useQuery(GET_CONFIRM_TASK_DELETE_OPEN);

	const [deleteTask] = useMutation(DELETE_TASK, {
		variables: { id },
	});

	return (
		<ConfirmTaskDeleteDialog
			isOpen={isOpen}
			confirmTaskDeleteOpenVar={confirmTaskDeleteOpenVar}
			deleteTask={deleteTask}
			getTasks={GET_TASKS}
		/>
	);
};

export default ConfirmTaskDeleteContainer;
