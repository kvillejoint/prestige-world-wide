var axios = require("axios");
var apiKey = "AIzaSyAb4AryV4MBP7c0ATYwXtmceHZULGMR1a0"

let placeID =[];

var Miamihelper = {

    runQuery: function() {
        return new Promise(function(resolve, reject,i) {
            // ==================
            //           Miami Tourist
            // ==================
            //   let independenceHall = "ChIJ29OwpIPIxokRnZ0xu4N5A1U";
            let crandonBeach = "ChIJARLTeoy12YgRWrhf9BwKLXU";
            let wetWill = "ChIJDZIMn5K02YgRbjAJ63Dz0P0";
            let mangosCafe = "ChIJsQeCYpK02YgRSn7c430EGV4";
            let fatTues = "ChIJ9x6uZJK02YgRYt-n1JW4tk8";
            let seaQuarium = "ChIJ5VX6c7-12YgRH_wIi3qwJ_Q";

            let placeArray = [crandonBeach,wetWill,mangosCafe,fatTues,seaQuarium];

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

export { Miamihelper as default }