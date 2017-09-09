// Include react dependencies
import React from "react";
import ReactDOM from "react-dom";
// Require the routes
import Routes from "./config/routes";
import { Router, browserHistory } from 'react-router'

// const Main = require("./components/Main");
// Include the react-router module
// const router = require("react-router");


// Include the Route component for displaying individual routes
// const Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
// const Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// const hashHistory = router.hashHistory;

// // Include the IndexRoute (catch-all route)
// const IndexRoute = router.IndexRoute;


console.log(Routes)

// Render content
ReactDOM.render(<Router history={browserHistory} routes={ Routes }></Router> , document.getElementById("root"));