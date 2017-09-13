// import grandchild files
import MiamiLocal from "./local/Miami";
import MiamiTourist from "./tourist/Miami";

// Require react dependencies
import React from "react";
import Link from "react-router";

class Dc extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Miami, FL
                </h1>
                <MiamiLocal />
                <hr />
                <MiamiTourist />
            </div>
        )
    }
};

export { Dc as default };