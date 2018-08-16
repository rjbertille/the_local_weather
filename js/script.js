/* Use whichever lbrairies or APIs */

/* The weather in my current location */ 
  
/* Different icon or background image)*/

/* Push a button to toggle between Fahrenheit and Celsius */ 

/* Require an HTTP Secure(https://) connection to obtain user's locale via HTML5 Geolocation */

/* IP Geolocation with Json: http://api.openweathermap.org/data/2.5/weather?id=6454744&appid=d8d4347081d2242d7697d5e7f86510a4 */

//{"coord":{"lon":-0.47,"lat":46.32},  
//"weather":
//[{"id":800,
//"main":"Clear",
//"description":"clear sky",
//"icon":"01d"}],
//"base":"stations",
//"main":{
//"temp":298.72,
//"pressure":1016,
//"humidity":73,
//"temp_min":295.15,
//"temp_max":302.15},
//"visibility":10000,
//"wind":{
//"speed":3.6,"deg":320},
//"clouds":{"all":0},
//"dt":1531994400,
//"sys":{"type":1,
//"id":5529,
//"message":0.003,
//"country":"FR",
//"sunrise":1531974535,
//"sunset":1532029614},
//"id":6454744,
//"name":"Niort",
//"cod":200}}

//Information to reach API


//Declared some variables 
const loc = document.getElementById("location");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");

//Using HTML  Geolocation - return the latitude and the longitude of the user's position
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather);
    } else {
        locationField.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showWeather(location) {
    const lat = location.coord.latitude;
    const lon = location.coord.longitude;
    const url = "http://api.openweathermap.org/data/2.5/weather?";
    const APPID = "d8d4347081d2242d7697d5e7f86510a4";
    return fetch(url(lat, lon).APPID)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.name, data.weather, data.main.temp);
    })          

    .catch(function(error) {
        console.log(error);
    });
}