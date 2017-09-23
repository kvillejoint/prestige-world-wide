// ==================================
//            IMPORTS
// ==================================
import React, {Component} from "react";
import Message from "./Message";
// React router link
const Link = require("react-router").Link;

// ==================================
//            AXIOS for API
// ==================================
let axios = require("./utils/helpers");

// ==================================
//            MAIN REACT
// ==================================
let Main = React.createClass({
    getInitialState: function() {
        return {showMe: true};
    },

    onClick: function() {
        this.setState({showMe: false});
    },

    setTrue: function() {
        this.setState({showMe: true});
    },
    
    render: function() {
        const {
            children
        } = this.props;
        if (this.state.showMe) {
            return (
                <div className="container-fluid">
                    <div className="row nav">
                        <div className="legend col-sm-2">
                            <Link onClick={this.setTrue} to="/app"><img className="logo" src="/img/logo-image.png" alt="" />
                            </Link>
                        </div>
                        <div className="col-sm-10 navButtons">
                            <Link onClick={this.onClick} to="/app/Philly"><button id="philly" className="btn" type="button">Philadelphia</button></Link>
                            <Link onClick={this.onClick} to="/app/Dc"><button id="dc" className="btn" type="button">Washington D.C.</button></Link>
                            <Link onClick={this.onClick} to="/app/Miami"><button id="miami" className="btn" type="button">Miami</button></Link>
                            <Link onClick={this.onClick} to="/app/Nyc"><button id="nyc" className="btn" type="button">New York City</button></Link>
                            <Link onClick={this.onClick} to="/app/Sf"><button id="sf" className="btn" type="button">San Fransisco</button></Link>
                        </div>
                    </div>
                    <div className="row elementBody">
                        <div className="col-sm-12"> 
                            {children}
                        </div>
                        <Message />
                    </div>             
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <div className="row nav">
                    <div className="legend col-sm-2">
                        <Link onClick={this.setTrue} to="/app"><img className="logo" src="/img/logo-image.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-sm-10 navButtons">
                        <Link onClick={this.onClick} to="/app/Philly"><button id="philly" className="btn" type="button">Philadelphia</button></Link>
                        <Link onClick={this.onClick} to="/app/Dc"><button id="dc" className="btn" type="button">Washington D.C.</button></Link>
                        <Link onClick={this.onClick} to="/app/Miami"><button id="miami" className="btn" type="button">Miami</button></Link>
                        <Link onClick={this.onClick} to="/app/Nyc"><button id="nyc" className="btn" type="button">New York City</button></Link>
                        <Link onClick={this.onClick} to="/app/Sf"><button id="sf" className="btn" type="button">San Fransisco</button></Link>
                    </div>
                </div>
                <div className="row elementBody">
                    <div className="col-sm-12"> 
                        {children}
                    </div>
                </div>     
            </div>
        )
    }
});

// module.exports = Main;
export { Main as default };