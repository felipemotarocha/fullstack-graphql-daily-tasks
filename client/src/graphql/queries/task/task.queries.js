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
