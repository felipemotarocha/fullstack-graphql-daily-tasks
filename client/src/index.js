import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import { cache } from "./graphql/cache";
import App from "./App/App";
import "./index.css";

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache,
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
