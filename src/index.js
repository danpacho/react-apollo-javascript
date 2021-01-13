import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo.js";

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("App")
);
