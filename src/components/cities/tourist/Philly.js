
// Require react dependencies
import React, { Component } from "react";
import Link from "react-router";
import PThelper from "./PhillyT";
import Info from "../../utils/Info";
import Reviews from "../../utils/Reviews";

class PhillyTourist extends React.Component {

       constructor(props) {
           super();
                this.state = {
                    attractions: []
                }
    }
     componentDidMount() {
        // make AJAX calls, set this.state.attractions, etc.
       let Paxios =  PThelper.runQuery();
        Paxios.then(data => this.setState({attractions: data}));
    }
    renderInfoList() {
      return this.state.attractions.map(attraction =>{
            return <Info key = {attraction.id} id={attraction.id} name= {attraction.name} address = {attraction.address} hours = {attraction.hours} rating = {attraction.rating} website = {attraction.website}/>
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                        {this.renderInfoList()}
                </div>
                <hr />
            </div>
        )
    }
};

export { PhillyTourist as default };
