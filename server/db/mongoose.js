const mongoose = require("mongoose");

mongoose.connect(
	`mongodb+srv://admin:${process.env.DB_PASSWORD}@daily-tasks-cluster.iwgrr.gcp.mongodb.net/daily-tasks?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);
