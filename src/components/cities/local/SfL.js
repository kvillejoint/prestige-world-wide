var axios = require("axios");
var apiKey = "AIzaSyAb4AryV4MBP7c0ATYwXtmceHZULGMR1a0"

let placeID =[];

var SFLhelper = {

    runQuery: function() {
        return new Promise(function(resolve, reject,i) {
          // ==================
            //           San Fran Local
            // ==================
            let japanTown = "ChIJzxArLbmAhYARpGV-keMhoIA";
            let twinPeaks = "ChIJt3HwrOJ9j4ARbW6uAcmhz7I";
            let tonyPizza = "ChIJHXHcEvGAhYARQPuHNN78s78";
            let doloPark = "ChIJp3CqeRd-j4ARYI0i8e_kGKY";
            let contiGo = "ChIJ42itYRJ-j4ARp2OkZilImm0";

              let placeArray = [japanTown,twinPeaks,tonyPizza,doloPark,contiGo];



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

export { SFLhelper as default }
