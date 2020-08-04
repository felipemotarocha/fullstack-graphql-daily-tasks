import { gql } from "@apollo/client";

export const GET_TASKS = gql`
	query Tasks {
		tasks {
			id
			description
			isCompleted
			conclusionTime
		}
	}
`;

export const GET_CONFIRM_TASK_DELETE_OPEN = gql`
	query ConfirmTaskDeleteOpen {
		confirmTaskDeleteOpen @client {
			isOpen
		}
	}
`;
