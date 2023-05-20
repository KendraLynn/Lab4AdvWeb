var APIKey = "a0d194868389b7ccaeb09d0d12feeaf2";

// default lat and long set for Heritage College upon opening 
var newLat = 45.456293;
var newLong = -75.765667;

initMap(newLat, newLong);

function cityLoc() {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + APIKey;
    fetch(queryURL)
        .then(function (response) {

            // webpage alert if 404 is returned 
            if (response.status === 404) {
                alert("This is not a city!");
                return;
            } else {
                return response.json();
            };
        })
        .then(function (data) {
            if (data === undefined) {
                return;
            } else {
                console.log(data.coord);

                // changes the new lat and long coordinates of the searched city 
                newLat = data.coord.lat;
                newLong = data.coord.lon;
            };

            // runs results in the init function 
            initMap();

        });
}

