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
                    NYC
                </h1>
            <div className="row">
                <div className="col-sm-6 local">
                    <h3>Local Nyc</h3>
                    <NycLocal />
                </div>
                <div className="col-sm-6 tourist">
                    <h3>Touristy Nyc</h3>
                    <NycTourist />
                </div>
            </div>                
        </div>
        )
    }
};

export { Nyc as default };