import  Main from "../components/Main";

// import Philly
import Philly from "../components/cities/Philly";
// Philly child files
import PhillyLocal from "../components/cities/local/Philly";
import PhillyTourist from "../components/cities/tourist/Philly";

// import dc
import Dc from "../components/cities/Dc";
// dc child files
import DcLocal from "../components/cities/local/Dc";
import DcTourist from "../components/cities/tourist/Dc";

// import miami
import Miami from "../components/cities/Miami";
// miami child files
import MiamiLocal from "../components/cities/local/Miami";
import MiamiTourist from "../components/cities/tourist/Miami";

// import nyc
import Nyc from "../components/cities/Nyc";
// nyc child files
import NycLocal from "../components/cities/local/Nyc";
import NycTourist from "../components/cities/tourist/Nyc";

// import sf
import Sf from "../components/cities/Sf";
// san fran child files
import SfLocal from "../components/cities/local/Sf";
import SfTourist from "../components/cities/tourist/Sf";

import Request from "../components/cities/Request";

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
        <Route exact path="/app" component={Main}>
            <Route exact path="/app/Request" component={Request} />
            <Route exact path="/app/Philly" component={Philly} />
            <Route exact path="/app/Dc" component={Dc} />
            <Route exact path="/app/Miami" component={Miami} />
            <Route exact path="/app/Nyc" component={Nyc} />
            <Route exact path="/app/Sf" component={Sf} />
        </Route>
);

export { routes as default };