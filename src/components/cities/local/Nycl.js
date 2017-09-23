var axios = require("axios");
var apiKey = "AIzaSyAb4AryV4MBP7c0ATYwXtmceHZULGMR1a0"

let placeID =[];

var Nychelper = {

    runQuery: function() {
        return new Promise(function(resolve, reject,i) {
            // ==================
            //           Nyc Local
            // ==================
            let mNaturalhistory = "ChIJCXoPsPRYwokRsV1MYnKBfaI";
            let sweetAfton = "ChIJWx0TrzhfwokRjlhD_Yop39c";
            let bronxZoo = "ChIJi9JqUYP0wokRLhCVlxy0bgU";
            let halal = "ChIJ0R7rb_hYwokRUeGgoCA8LGw";
            let whiskeyBrook = "ChIJ-zhrL11ZwokRZniOkPNnIug";
            

            let placeArray = [mNaturalhistory,sweetAfton,bronxZoo,halal,whiskeyBrook];

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

export { Nychelper as default }