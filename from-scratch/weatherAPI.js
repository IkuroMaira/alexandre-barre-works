// const API_KEY = "9352490f3ef6b700565e6399fc5d223b";
const API_KEY = "7DBbJqicPAaXG6Wh";
const LANG = "fr";


// Porto
/*const LAT_CITY = "41.1494512";
const LON_CITY = "-8.6107884";*/

// Poitiers
const LAT_CITY = "46.578063365248454";
const LON_CITY = "0.34455536071882786";

/*
async function fetchWeatherAPI() {
    // Si je fais l'appel de l'API avec le nom de la ville : https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key} - attention obsolète
    const weatherAPI = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${LAT_CITY}&lon=${LON_CITY}&appid=${API_KEY}&lang=${LANG}&units=metric`
    );
    // console.log(weatherAPI);
    const weather = await weatherAPI.json();

    return weather
}

const displayTempature = async () => {
    const weatherCity = await fetchWeatherAPI();
    // console.log(weatherCity);

    // La temperature
    console.log(weatherCity.main.temp);
    // Description du temps
    console.log(weatherCity.weather);
    console.log(weatherCity.weather[0].description);
    // Visibilité sur 10km
    console.log(weatherCity.visibility);
}

displayTempature();*/

async function fetchWeatherAPI() {
    const weatherAPI = await fetch(
        `http://my.meteoblue.com/packages/basic-1h_basic-day?lat=47.558&lon=7.573&apikey=${API_KEY}`,
    );
    // console.log(weatherAPI);
    const dataWeather = await weatherAPI.json();
    console.log(dataWeather);
}

fetchWeatherAPI();