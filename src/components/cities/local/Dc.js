
// Require react dependencies
import React, { Component } from "react";
import Link from "react-router";
import Dchelper from "./Dcl";
import Info from "../../utils/Info";
import Reviews from "../../utils/Reviews";

class DcLocal extends React.Component {
    
       constructor(props) {
           super();
                this.state = {
                    attractions: []
                }
    }
     componentDidMount() {
        // make AJAX calls, set this.state.attractions, etc.
       let Paxios =  Dchelper.runQuery();
        Paxios.then(data => this.setState({attractions: data}));
    }
    renderInfoList() {
      return this.state.attractions.map(attraction =>{
            return <Info key = {attraction.id}  id = {attraction.id} website= {attraction.website} name= {attraction.name} address = {attraction.address} hours = {attraction.hours} rating = {attraction.rating} reviews = {attraction.reviews}/>
        })
    }
   
    render() {
        return (
            <div>
                <div className="row">
                        {this.renderInfoList()}
                </div>
            </div>
        )
    }
};

export { DcLocal as default };