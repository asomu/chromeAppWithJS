const API_KEY = 'e9b98da1f66e55eb38b086421ceff67b';
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(reponse){
            return reponse.json();
        })
        .then(function(json){
            const temperature = json.main.temp;
            const name = json.name;
            weather.innerText = `${temperature}C in ${name}`;
        })

}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoods();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj) );
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    console.log(coordsObj);
    saveCoords(coordsObj);
     
}

function handleError() {
    console.log("Can't access geo location");
}

function askForCoods() {
    navigator.geolocation.getCurrentPosition( handleGeoSuccess,handleError );
}

function init() {
    loadCoords();
}

init();