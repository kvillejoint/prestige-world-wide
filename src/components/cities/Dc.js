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
                <h2>
                    Washington D.C.
                </h2>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 local">
                        <p className="citySections">Local Gems <i className="fa fa-diamond" aria-hidden="true"></i></p>
                        <DcLocal />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 tourist">
                        <p className="citySections">Tourist Attractions <i className="fa fa-list" aria-hidden="true"></i></p>
                        <DcTourist />
                    </div>
                </div>              
            </div>
        )
    }
};

export { Dc as default };