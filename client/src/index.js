import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App/App";
import "./index.css";

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
