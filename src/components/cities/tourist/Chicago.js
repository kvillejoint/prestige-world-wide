// Require react dependencies
import React from "react";
import Link from "react-router";

class ChiTourist extends React.Component {
    render() {
        return (

            <div id="chicagoTouristCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <img className="touristImg" src="http://via.placeholder.com/250x150" />
                                <p className="description">Description goes here. fnasjklfnb fjdkbflaksnfjk sa,fbjasfn,msa fjksan salkbfnas;f asjkf jlsa fkjas lkf sajf salkf asljf akls fnasfkjlas fasfmsafjkl</p>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <p>Mapzxzxdas</p>
                                <p>Address</p>
                                <p>Hours of business</p>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <p>Popular times</p>
                                <p>Star rating</p>
                                <p>Link for reviews</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <img className="touristImg" src="http://via.placeholder.com/250x150" />
                            <p className="description">Description goes here. fnasjklfnb fjdkbflaksnfjk sa,fbjasfn,msa fjksan salkbfnas;f asjkf jlsa fkjas lkf sajf salkf asljf akls fnasfkjlas fasfmsafjkl</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <p>Map</p>
                            <p>Address</p>
                            <p>Hours of business</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <p>Popular times</p>
                            <p>Star rating</p>
                            <p>Link for reviews</p>
                        </div>
                    </div>
                </div>

                </div>

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
};

export { ChiTourist as default };