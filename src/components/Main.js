// ==================================
//            IMPORTS
// ==================================
import React, {Component} from "react";
// React router link
const Link = require("react-router").Link;

// ==================================
//            AXIOS for API
// ==================================
let axios = require("./utils/helpers");

// ==================================
//            MAIN REACT
// ==================================
let Main = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="btn-group" role="group" aria-label="Basic example">
                // button group for all 5 cities
                    <Link to="/Chicago"><button className="btn btn-secondary" type="button">Chicago</button></Link>
                    <Link to="/Dc"><button className="btn btn-secondary" type="button">Dc</button></Link>
                    <Link to="/Miami"><button className="btn btn-secondary" type="button">Miami</button></Link>
                    <Link to="/Nyc"><button className="btn btn-secondary" type="button">Nyc</button></Link>
                    <Link to="/Sf"><button className="btn btn-secondary" type="button">Sf</button></Link>
                </div>
            </div>
        )
    }
});

// module.exports = Main;
export { Main as default };