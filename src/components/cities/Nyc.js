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
                <h2>
                    New York City, NY
                </h2>
            <div className="row">
                <div className="col-sm-6 local">
                    <p className="citySections">Local Gems <i className="fa fa-diamond" aria-hidden="true"></i></p>
                    <NycLocal />
                </div>
                <div className="col-sm-6 tourist">
                    <p className="citySections">Tourist Attractions <i className="fa fa-list" aria-hidden="true"></i></p>
                    <NycTourist />
                </div>
            </div>                 
        </div>
        )
    }
};

export { Nyc as default };