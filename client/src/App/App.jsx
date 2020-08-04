import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { Container } from "./App.styles";

import Home from "../pages/home.component";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1b1c25",
		},
		secondary: {
			main: "#4BB543",
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
