// import grandchild files
import ChiLocal from "./local/Chicago"
import ChiTourist from "./tourist/Chicago"

// Require react dependencies
import React from "react";
import ReactDOM from "react-dom";
import Link from "react-router";

class Chicago extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Chicago
                </h1>
                <ChiLocal />
                <hr />
                <ChiTourist />
            </div>
        )
    }
};

export { Chicago as default };