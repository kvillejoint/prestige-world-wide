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
                <h2>
                    Philadelphia, PA
                </h2>
                <div className="row">
                    <div className="col-sm-6 local">
                        <p className="citySections">Local Gems <i className="fa fa-diamond" aria-hidden="true"></i></p>
                        <PhillyLocal />
                    </div>
                    <div className="col-sm-6 tourist">
                        <p className="citySections">Tourist Attractions <i className="fa fa-list" aria-hidden="true"></i></p>
                        <PhillyTourist />
                    </div>
                </div>               
            </div>
        )
    }
};

export { Philly as default };