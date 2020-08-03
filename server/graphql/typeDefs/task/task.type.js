const { gql } = require("apollo-server-express");

module.exports = gql`
	scalar Date

	type Task {
		id: ID!
		day: Date!
		description: String!
		isCompleted: Boolean
		conclusionTime: Date
	}
`;
