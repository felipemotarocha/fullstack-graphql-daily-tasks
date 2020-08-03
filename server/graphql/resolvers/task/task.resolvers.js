const Task = require("../../../models/task/task.model");
const { GraphQLScalarType } = require("graphql");

module.exports = {
	Date: new GraphQLScalarType({
		name: "Date",
		description: "Date custom scalar type",
		parseValue(value) {
			return value; // value from the client
		},
		serialize(value) {
			return value; // value sent to the client
		},
	}),

	Query: {
		task: async (_parent, { id }) => await Task.findById(id),
	},

	Mutation: {
		newTask: (_parent, { description }) => {
			const task = new Task({
				day: new Date(),
				description,
				isCompleted: false,
				conclusionTime: null,
			});
			task.save();

			return task;
		},
	},
};
