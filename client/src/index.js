import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./Components/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GlobalStyles>
        <Router>
            <App />
        </Router>
    </GlobalStyles>
);
