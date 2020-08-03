import React from "react";

import { Container } from "./home.styles";

import Navbar from "../components/navbar/navbar.component";
import TaskList from "../components/task-list/task-list.component";

const Home = () => {
	return (
		<Container>
			<Navbar />
			<TaskList />
		</Container>
	);
};

export default Home;
