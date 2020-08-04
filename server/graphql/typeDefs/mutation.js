const { gql } = require("apollo-server-express");

module.exports = gql`
	type Mutation {
		newTask(description: String!): Task!
		toggleTaskStatus(id: ID!): Task!
		deleteTask(id: ID!): Task!
	}
`;
