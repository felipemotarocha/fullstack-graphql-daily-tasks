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
		tasks: async () => await Task.find({}),
	},

	Mutation: {
		newTask: async (_parent, { description }) => {
			const task = new Task({
				day: new Date(),
				description,
				isCompleted: false,
				conclusionTime: null,
			});
			await task.save();

			return task;
		},
		toggleTaskStatus: async (_parent, { id }) => {
			const task = await Task.findById(id);
			task.isCompleted = !task.isCompleted;

			task.isCompleted
				? (task.conclusionTime = new Date())
				: (task.conclusionTime = null);

			task.save();

			return task;
		},
		deleteTask: async (_parent, { id }) => {
			const task = await Task.findByIdAndDelete(id);
			return task;
		},
	},
};
