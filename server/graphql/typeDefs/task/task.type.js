const { gql } = require("apollo-server-express");

module.exports = gql`
	scalar Date

	type Task {
		day: Date!
		description: String!
		isCompleted: Boolean
		conclusionTime: Date
	}
`;
