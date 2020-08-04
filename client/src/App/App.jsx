import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { Container } from "./App.styles";

import Home from "../pages/home.component";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0f4c75",
		},
		secondary: {
			main: "#bbe1fa",
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Home />
			</Container>
		</ThemeProvider>
	);
};

export default App;
