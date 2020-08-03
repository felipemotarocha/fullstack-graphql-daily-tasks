import { gql } from "@apollo/client";

export const TOGGLE_TASK_STATUS = gql`
	mutation ToggleTaskStatus($id: ID!) {
		toggleTaskStatus(id: $id) {
			id
			description
			isCompleted
		}
	}
`;
