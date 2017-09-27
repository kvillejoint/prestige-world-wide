import React, { Component } from "react";
import Path from "path";
class Info extends Component {
                           render() {
                                            const {id, rating, website, hours, address,name} = this.props;
                                            const imagePath = require(`../img/${id}.jpg`);
                                    //  console.log("HOURS" + typeof hours)
                                       return (
                                           <div className="row locationContainer">
                                                       <div className="col-sm-12 cold-md-12 col-lg-12 imgContainer">
                                                              <img className="localImg" src={imagePath} alt="topic pic"/>   
                                                       </div>
                                                       <div className="col-sm-12 col-md-12 col-lg-12">
                                                        <button className="favorite"><i className="fa fa-star" aria-hidden="true"></i></button>
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
