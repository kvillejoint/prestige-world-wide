import  Main from "../components/Main";

import Chicago from "../components/cities/Chicago";
import Dc from "../components/cities/Dc";
import Miami from "../components/cities/Miami";
import Nyc from "../components/cities/Nyc";
import Sf from "../components/cities/Sf";

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

// Export all routes
const routes = (
        <Route path="/" component={Main}>
            <Route path="Chicago" component={Chicago} />
            <Route path="Dc" component={Dc} />
            <Route path="Miami" component={Miami} />
            <Route path="Nyc" component={Nyc} />
            <Route path="Sf" component={Sf} />
        </Route>
);

export { routes as default };