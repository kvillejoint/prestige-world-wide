// chicago child files
import ChiLocal from "./local/Chicago";
import ChiTourist from "./tourist/Chicago";

// Require react dependencies
import React from "react";
import Link from "react-router";

class Chicago extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Chicago
                </h1>
                <div className="row">
                    <div className="col-sm-6 local">
                        <h3>Local Chicago</h3>
                        <ChiLocal />
                    </div>
                    <div className="col-sm-6 tourist">
                        <h3>Touristy Chicago</h3>
                        <ChiTourist />
                    </div>
                </div>                
            </div>
        )
    }
};

export { Chicago as default };