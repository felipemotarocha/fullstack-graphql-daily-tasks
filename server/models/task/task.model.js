const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	day: {
		type: Date,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	isCompleted: Boolean,
	conclusionTime: Date,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
