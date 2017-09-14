// import grandchild files
import SfLocal from "./local/Sf";
import SfTourist from "./tourist/Sf";

// Require react dependencies
import React from "react";
import Link from "react-router";

class Sf extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    San Francisco, CA
                </h1>
                <SfLocal />
                <hr />
                <SfTourist />
            </div>
        )
    }
};

export { Sf as default };