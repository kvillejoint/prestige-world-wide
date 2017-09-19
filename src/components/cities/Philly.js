// Philly Phillyld files
import PhillyLocal from "./local/Philly";
import PhillyTourist from "./tourist/Philly";

// Require react dependencies
import React from "react";
import Link from "react-router";

class Philly extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Philly
                </h1>
                <div className="row">
                    <div className="col-sm-6 local">
                        <h3>Local Philly</h3>
                        <PhillyLocal />
                    </div>
                    <div className="col-sm-6 tourist">
                        <h3>Touristy Philly</h3>
                        <PhillyTourist />
                    </div>
                </div>                
            </div>
        )
    }
};

export { Philly as default };