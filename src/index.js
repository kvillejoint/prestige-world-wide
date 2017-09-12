// Include react dependencies
import React from "react";
import ReactDOM from "react-dom";
// Require the routes
import Routes from "./config/routes";
import { Router, browserHistory } from 'react-router'

console.log(Routes)

// Render content
ReactDOM.render(<Router history={browserHistory} routes={ Routes }></Router> , document.getElementById("root"));