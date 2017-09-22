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
                <div className="row nav">
                    <div className="legend col-sm-2">
                        <img className="logo" src="/img/logo-image.png" alt="" />
                    </div>
                    <div className="col-sm-10 navButtons">
                        <Link to="/app/Philly"><button id="philly" className="btn" type="button">Philadelphia</button></Link>
                        <Link to="/app/Dc"><button id="dc" className="btn" type="button">Washington D.C.</button></Link>
                        <Link to="/app/Miami"><button id="miami" className="btn" type="button">Miami</button></Link>
                        <Link to="/app/Nyc"><button id="nyc" className="btn" type="button">New York City</button></Link>
                        <Link to="/app/Sf"><button id="sf" className="btn" type="button">San Fransisco</button></Link>
                    </div>
                </div>
                <div className="row elementBody">
                    <div className="col-sm-12">
                        {children}
                    </div>
                </div>
                <div className="message row">
                    <div className="col-sm-12">
                        <h1 id="mainMessage">Pick a place above that you'd like to travel to.</h1>
                        <img className="locationImg" src="/img/location.jpg" />
                    </div>
                </div>
            </div>
        )
    }
});

// module.exports = Main;
export { Main as default };