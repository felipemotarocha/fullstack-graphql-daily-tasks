import { gql } from "@apollo/client";

export const NEW_TASK = gql`
	mutation NewTask($description: String!) {
		newTask(description: $description) {
			id
			description
			isCompleted
			conclusionTime
		}
	}
`;

export const TOGGLE_TASK_STATUS = gql`
	mutation ToggleTaskStatus($id: ID!) {
		toggleTaskStatus(id: $id) {
			id
			description
			isCompleted
			conclusionTime
		}
	}
`;

export const DELETE_TASK = gql`
	mutation DeleteTask($id: ID!) {
		deleteTask(id: $id) {
			id
			description
			isCompleted
			conclusionTime
		}
	}
`;
