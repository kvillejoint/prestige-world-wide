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
        const {
            children
        } = this.props;

        return (
            <div className="container-fluid">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Link to="/Philly"><button id="philly" className="btn btn-secondary" type="button">Philly</button></Link>
                    <Link to="/Dc"><button id="dc" className="btn btn-secondary" type="button">Dc</button></Link>
                    <Link to="/Miami"><button id="miami" className="btn btn-secondary" type="button">Miami</button></Link>
                    <Link to="/Nyc"><button id="nyc" className="btn btn-secondary" type="button">Nyc</button></Link>
                    <Link to="/Sf"><button id="sf" className="btn btn-secondary" type="button">Sf</button></Link>
                </div>
                {children}
            </div>
        )
    }
});

// module.exports = Main;
export { Main as default };