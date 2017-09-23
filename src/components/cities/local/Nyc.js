
// Require react dependencies
import React, { Component } from "react";
import Link from "react-router";
import Nychelper from "./Nycl";
import Info from "../../utils/Info";
import Reviews from "../../utils/Reviews";

class NycLocal extends React.Component {
    
       constructor(props) {
           super();
                this.state = {
                    attractions: []
                }
    }
     componentDidMount() {
        // make AJAX calls, set this.state.attractions, etc.
       let Paxios =  Nychelper.runQuery();
        Paxios.then(data => this.setState({attractions: data}));
    }
    renderInfoList() {
      return this.state.attractions.map(attraction =>{
            return <Info key = {attraction.id} id = {attraction.id} website= {attraction.website} name= {attraction.name} address = {attraction.address} hours = {attraction.hours} rating = {attraction.rating} reviews = {attraction.reviews}/>
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

export { NycLocal as default };