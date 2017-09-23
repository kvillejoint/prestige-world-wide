import React, { Component } from "react";
import Path from "path";
class Info extends Component {
                           render() {
                                            const {id, rating, website, hours, address,name} = this.props;
                                            const imagePath = require(`../img/${id}.jpg`);
                                    //  console.log("HOURS" + typeof hours)
                                       return (
                                           <div className="row locationContainer">
                                                       <div className="col-sm-12 cold-md-6 col-lg-6">
                                                              <img className="localImg" src={imagePath} alt="topic pic"/>   
                                                       </div>
                                                       <div className="col-md-4 col-lg-12">
                                                               <p>{name}</p>
                                                               <p>{address}</p>
                                                                {typeof hours === 'object' ? hours.map((hour,k)=><div key={k}><small>{hour}</small></div>) : hours} 
                                                               {/* <p>{hours}</p> */}

                                                               <p className="ratings">Rating: {rating}</p>
                                                               <a href={website} className="website">{website}</a>
                                                               <hr/>
                                                        </div>

                                             </div>

                                       )
                           }
                       }

export { Info as default };
