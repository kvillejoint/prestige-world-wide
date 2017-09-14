// import grandchild files
import NycLocal from "./local/Nyc";
import NycTourist from "./tourist/Nyc";

// Require react dependencies
import React from "react";
import Link from "react-router";

class Nyc extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    New York, NY
                </h1>
                <NycLocal />
                <hr />
                <NycTourist />
            </div>
        )
    }
};

export { Nyc as default };