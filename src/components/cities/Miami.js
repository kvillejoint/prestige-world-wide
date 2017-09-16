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
                <h1>
                    Miami
                </h1>
            <div className="row">
                <div className="col-sm-6 local">
                    <h3>Local Miami</h3>
                    <MiamiLocal />
                </div>
                <div className="col-sm-6 tourist">
                    <h3>Touristy Miami</h3>
                    <MiamiTourist />
                </div>
            </div>                
        </div>
        )
    }
};

export { Miami as default };