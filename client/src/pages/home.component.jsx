import React from "react";

import { Container } from "./home.styles";

import Navbar from "../components/navbar/navbar.component";
import { default as TaskList } from "../components/task-list/task-list.container";

const Home = () => {
	return (
		<Container>
			<Navbar />
			<TaskList />
		</Container>
	);
};

export default Home;
