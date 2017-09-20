//require react dependencies
import React from "react";
import Link from "react-router";

class NycTourist extends React.Component {
  render() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <img className="localImg img-thumbnail" src="http://via.placeholder.com/400x150" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <p className="description">Description</p>   
                    <p className="address">Address</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <p className="businessHours">Hours of business</p>
                    <p className="ratings">Star rating</p>
                    <p className="reviews">Link for reviews</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-12">
                    <img className="localImg img-thumbnail" src="http://via.placeholder.com/400x150" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <p className="description">Description</p>   
                    <p className="address">Address</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <p className="businessHours">Hours of business</p>
                    <p className="ratings">Star rating</p>
                    <p className="reviews">Link for reviews</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-12">
                    <img className="localImg img-thumbnail" src="http://via.placeholder.com/400x150" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <p className="description">Description</p>   
                    <p className="address">Address</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <p className="businessHours">Hours of business</p>
                    <p className="ratings">Star rating</p>
                    <p className="reviews">Link for reviews</p>
                </div>
            </div>
        </div>
    )
  }
};

export { NycTourist as default };