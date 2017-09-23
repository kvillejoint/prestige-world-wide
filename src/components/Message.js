// IMPORTS
import React, {Component} from "react";
// const Link = require("react-router").Link;

class Message extends React.Component {
    render() {
        return (
            <div className="message row">
                <div className="col-sm-12">
                    <h1 id="mainMessage">Pick a place above that you'd like to travel to.</h1>
                    <img className="locationImg" src="/img/location.jpg" />
                </div>
            </div>
        )
    }
}

export { Message as default };