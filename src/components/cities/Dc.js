// import grandchild files
import DcLocal from "./local/Dc";
import DcTourist from "./tourist/Dc";

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
                <div className="row">
                    <div className="col-sm-6 local">
                        <h3>Local Dc</h3>
                        <DcLocal />
                    </div>
                    <div className="col-sm-6 tourist">
                        <h3>Touristy Dc</h3>
                        <DcTourist />
                    </div>
                </div>              
            </div>
        )
    }
};

export { Dc as default };