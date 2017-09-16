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
                    San Fransisco
                </h1>
            <div className="row">
                <div className="col-sm-6 local">
                    <h3>Local San Fran</h3>
                    <SfLocal />
                </div>
                <div className="col-sm-6 tourist">
                    <h3>Touristy San Fran</h3>
                    <SfTourist />
                </div>
            </div>                
        </div>
        )
    }
};

export { Sf as default };