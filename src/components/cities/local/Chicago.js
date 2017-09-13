// Require react dependencies
import React from "react";
import Link from "react-router";

class ChiLocal extends React.Component {
    render() {
        return (
            <div id="chicagoLocalCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <p>hi</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export { ChiLocal as default };