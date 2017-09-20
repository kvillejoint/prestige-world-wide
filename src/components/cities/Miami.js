// import grandchild files
import MiamiLocal from "./local/Miami";
import MiamiTourist from "./tourist/Miami";

// Require react dependencies
import React from "react";
import Link from "react-router";

class Miami extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    Miami, FL
                </h2>
                <div className="row">
                    <div className="col-sm-6 local">
                        <p className="citySections">Local Gems <i className="fa fa-diamond" aria-hidden="true"></i></p>
                        <MiamiLocal />
                    </div>
                    <div className="col-sm-6 tourist">
                        <p className="citySections">Tourist Attractions <i className="fa fa-list" aria-hidden="true"></i></p>
                        <MiamiTourist />
                    </div>
                </div>                 
        </div>
        )
    }
};

export { Miami as default };