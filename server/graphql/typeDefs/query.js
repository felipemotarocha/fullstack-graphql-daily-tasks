const { gql } = require("apollo-server-express");

module.exports = gql`
	type Query {
		task(id: ID!): Task!
		tasks: [Task!]
	}
`;
