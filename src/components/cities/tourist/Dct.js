var axios = require("axios");
var apiKey = "AIzaSyAb4AryV4MBP7c0ATYwXtmceHZULGMR1a0"

let placeID =[];

var Dchelper = {

    runQuery: function() {
        return new Promise(function(resolve, reject,i) {
            // ==================
            //           Philly TOUR
            // ==================
            //   let independenceHall = "ChIJ29OwpIPIxokRnZ0xu4N5A1U";
            let nationalmallmemorials = "ChIJMT3_Wpu3t4kRQScGokyrCDo";
            let whitehouse = "ChIJ37HL3ry3t4kRv3YLbdhpWXE";
            let smithsonianair = "ChIJISQme4O3t4kRG-iM3TfJ5_g";
            let washingtonmonument = "ChIJx-D7vaG3t4kRYdeRQ9buNiw";
            let benschilibowl = "ChIJM_l-a-a3t4kRQa_lW1A7W8k";

            let placeArray = [nationalmallmemorials,whitehouse,smithsonianair,washingtonmonument,benschilibowl];

            placeID =[];

            for (var i = 0; i < placeArray.length; i++) {
                var element = placeArray[i];
                placeID.push( element);
            }

            // console.log(placeID)
            let placesResults = [];
            let completed = 0;

            placeID.forEach(place => {
                const queryURL = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place}&key=${apiKey}`
                 axios.get(queryURL).then(response => {
                    completed++;
                    // console.log(response.data);
                    let result = response.data.result;
                    console.log(result);
                    placesResults.push({
                        id: result.id,
                        name: result.name,
                        website: result.website,
                        rating: result.rating,
                        address:result.formatted_address,
                        reviews: result.reviews,
                        hours: (typeof result.opening_hours === 'undefined') ? 'No Hours Listed' : result.opening_hours.weekday_text
                    });
                    console.log(placesResults)
                    if(completed === placeID.length) {
                        resolve(placesResults);
                    }

                }).catch(err => {
                    completed++
                    if(completed === placeID.length) {
                        resolve(placesResults);
                    }
                })
            })
        })
    }              
}// end PhillyT

// export default function () { PThelper };

export { Dchelper as default }