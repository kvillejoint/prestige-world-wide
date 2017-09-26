// Require react dependencies
import React from "react";
import Link from "react-router";

class Request extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p id="requestTitle">
                    Are we missing a city you'd like to know about? Let us know which cities to expand towards below!
                </p>
                <hr id="requestDivider"/>
                <form>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-6 col-xs-6">                            
                                    <div className="form-group">
                                        <label for="firstName">First Name:</label><br />
                                        <input className="firstName" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <div className="form-group">
                                        <label for="lastName">Last Name:</label><br />
                                        <input className="lastName" />
                                    </div>
                                </div>
                            </div>
                            <label for="email">Email:</label><br />
                            <input className="email" /><br/>            
                            <label for="cityInput">City:</label><br />
                                        <input className="cityInput" /><br/>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            State
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" value="Alabama" href="#">Alabama</a>
                                                <a className="dropdown-item" value="Alaska" href="#">Alaska</a>
                                                <a className="dropdown-item" value="Arizona" href="#">Arizona</a>
                                                <a className="dropdown-item" value="Arkansas" href="#">Arkansas</a>
                                                <a className="dropdown-item" value="California" href="#">California</a>
                                                <a className="dropdown-item" value="Colorado" href="#">Colorado</a>
                                                <a className="dropdown-item" value="Connecticut" href="#">Connecticut</a>
                                                <a className="dropdown-item" value="Delaware" href="#">Delaware</a>
                                                <a className="dropdown-item" value="Florida" href="#">Florida</a>
                                                <a className="dropdown-item" value="Georgia" href="#">Georgia</a>
                                                <a className="dropdown-item" value="Hawaii" href="#">Hawaii</a>
                                                <a className="dropdown-item" value="Idaho" href="#">Idaho</a>
                                                <a className="dropdown-item" value="Illinois" href="#">Illinois</a>
                                                <a className="dropdown-item" value="Indiana" href="#">Indiana</a>
                                                <a className="dropdown-item" value="Iowa" href="#">Iowa</a>
                                                <a className="dropdown-item" value="Kansas" href="#">Kansas</a>
                                                <a className="dropdown-item" value="Kentucky" href="#">Kentucky</a>
                                                <a className="dropdown-item" value="Louisiana" href="#">Louisiana</a>
                                                <a className="dropdown-item" value="Maine" href="#">Maine</a>
                                                <a className="dropdown-item" value="Maryland" href="#">Maryland</a>
                                                <a className="dropdown-item" value="Massachusetts" href="#">Massachusetts</a>
                                                <a className="dropdown-item" value="Michigan" href="#">Michigan</a>
                                                <a className="dropdown-item" value="Minnesota" href="#">Minnesota</a>
                                                <a className="dropdown-item" value="Mississippi" href="#">Mississippi</a>
                                                <a className="dropdown-item" value="Missouri" href="#">Missouri</a>
                                                <a className="dropdown-item" value="Montana" href="#">Montana</a>
                                                <a className="dropdown-item" value="Nebraska" href="#">Nebraska</a>
                                                <a className="dropdown-item" value="Nevada" href="#">Nevada</a>
                                                <a className="dropdown-item" value="New Hampshire" href="#">New Hampshire</a>
                                                <a className="dropdown-item" value="New Jersey" href="#">New Jersey</a>
                                                <a className="dropdown-item" value="New Mexico" href="#">New Mexico</a>
                                                <a className="dropdown-item" value="New York" href="#">New York</a>
                                                <a className="dropdown-item" value="North Carolina" href="#">North Carolina</a>
                                                <a className="dropdown-item" value="North Dakota" href="#">North Dakota</a>
                                                <a className="dropdown-item" value="Ohio" href="#">Ohio</a>
                                                <a className="dropdown-item" value="Oklahoma" href="#">Oklahoma</a>
                                                <a className="dropdown-item" value="Oregon" href="#">Oregon</a>
                                                <a className="dropdown-item" value="Pennsylvania" href="#">Pennsylvania</a>
                                                <a className="dropdown-item" value="Rhode Island" href="#">Rhode Island</a>
                                                <a className="dropdown-item" value="South Carolina" href="#">South Carolina</a>
                                                <a className="dropdown-item" value="South Dakota" href="#">South Dakota</a>
                                                <a className="dropdown-item" value="Tennessee" href="#">Tennessee</a>
                                                <a className="dropdown-item" value="Texas" href="#">Texas</a>
                                                <a className="dropdown-item" value="Utah" href="#">Utah</a>
                                                <a className="dropdown-item" value="Vermont" href="#">Vermont</a>
                                                <a className="dropdown-item" value="Virginia" href="#">Virginia</a>
                                                <a className="dropdown-item" value="Washington" href="#">Washington</a>
                                                <a className="dropdown-item" value="Washington D.C." href="#">Washington D.C.</a>
                                                <a className="dropdown-item" value="West Virginia" href="#">West Virginia</a>
                                                <a className="dropdown-item" value="Wisconsin" href="#">Wisconsin</a>
                                                <a className="dropdown-item" value="Wyoming" href="#">Wyoming</a>
                                            </div>                            
                            </div>
                            <button id="submitForm">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export {Request as default};