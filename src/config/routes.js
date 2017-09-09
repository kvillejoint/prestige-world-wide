import  Main from "../components/Main";
// Inclue the React library
const React = require("react");

// Include the react-router module
const router = require("react-router");

// Include the Route component for displaying individual routes
const Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
const Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
const hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

// Reference all city component

const Chicago = require("../components/cities/Chicago");
const Dc = require("../components/cities/Dc");
const Miami = require("../components/cities/Miami");
const Nyc = require("../components/cities/Nyc");
const Sf = require("../components/cities/Sf");

// Export all routes
const routes = (
        <Route path="/" component={Main}>
            <Route path="/Chicago" component={Chicago} />
            <Route path="/Dc" component={Dc} />
            <Route path="/Miami" component={Miami} />
            <Route path="/Nyc" component={Nyc} />
            <Route path="/Sf" component={Sf} />
        </Route>
);

export { routes as default };