// Require react dependencies
import React from "react";
import Link from "react-router";

class Request extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="jumbotron">
                    Are we missing a city you'd like to know about? Let us know which cities to expand towards below!
                </div>
                <form>
                    <div className="card">
                        <label for="cityInput">City:</label>
                        <br />
                        <input className="cityInput" />
                    </div>
                </form>
            </div>
        )
    }
};

export {Request as default};