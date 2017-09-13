// import grandchild files
import DcLocal from "./local/Dc";
import DCTourist from "./tourist/Dc";

// Require react dependencies
import React from "react";
import Link from "react-router";

class Dc extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Washington DC
                </h1>
                <DcLocal />
                <hr />
                <DCTourist />
            </div>
        )
    }
};

export { Dc as default };