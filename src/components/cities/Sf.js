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
                <h2>
                    San Francisco, CA
                </h2>
                <div className="row">
                    <div className="col-sm-6 local">
                        <p className="citySections">Local Gems <i className="fa fa-diamond" aria-hidden="true"></i></p>
                        <SfLocal />
                    </div>
                    <div className="col-sm-6 tourist">
                        <p className="citySections">Tourist Attractions <i className="fa fa-list" aria-hidden="true"></i></p>
                        <SfTourist />
                    </div>
                </div>               
            </div>
        )
    }
};

export { Sf as default };