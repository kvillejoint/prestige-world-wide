var axios = require("axios");
var apiKey = "AIzaSyAb4AryV4MBP7c0ATYwXtmceHZULGMR1a0"

let placeID =[];

var PLhelper = {

    runQuery: function() {
        return new Promise(function(resolve, reject,i) {
          // ==================
            //           Philly Local
            // ==================
            let hungryPidgeon = "ChIJIZipO5_IxokRm1NWn8Befek";
            let palizzi = "ChIJychkXBrGxokRF54kDJfKeUM";
            let magicGardens = "ChIJ7x4bRCHGxokR-BVjmbZ2LWk";
            let mutterMuse = "ChIJKZI5O8MyHogRMAkx1ntablc";

            let placeArray = [hungryPidgeon,palizzi,magicGardens,mutterMuse];
            
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
                 axios.get(queryURL, {
                    headers: {
                   'Content-Type': 'application/json'
               }
           }).then(response => {
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

export { PLhelper as default }
