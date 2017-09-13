//require react dependencies
import React from "react";
import Link from "react-router";

class SfLocal extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to San Francisco, CA</h1>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="http://via.placeholder.com/350x150" alt="First slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="http://via.placeholder.com/350x150" alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="http://via.placeholder.com/350x150" alt="Third slide" />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>

            </div>  
        )
    }
};

export { SfLocal as default };