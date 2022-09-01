//const button = document.getElementById("submit");
const form = document.querySelector('form');
const input = document.getElementById('input')

const locationName = document.getElementById("location")
const tempText = document.getElementById("temp")
const feelsLike = document.getElementById("feelsLike")
const humidity = document.getElementById("humidity")
const tempMin = document.getElementById("tempMin")
const tempMax = document.getElementById("tempMax")
const clouds = document.getElementById("clouds")
const wind = document.getElementById("wind")
const date = document.getElementById("date")
const time = document.getElementById("time")



async function getWeather (location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=6b90e7ed6704a9984fc25f85e2580025`, {mode: 'cors'})
        const weatherData = await response.json();
        const weather = {
            temperature: weatherData.main.temp,
            feelsLike: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            tempMin: weatherData.main.temp_min,
            tempMax: weatherData.main.temp_max,
            clouds: weatherData.weather[0].description,
            wind: weatherData.wind.speed,
        }
        locationName.textContent = capitalize(location);
        tempText.textContent = `${kToC(weather.temperature)} \u00B0C`;
        feelsLike.textContent = `${kToC(weather.feelsLike)} \u00B0C`;
        humidity.textContent = `${weather.humidity}%`;
        tempMin.textContent = `${kToC(weather.tempMin)} \u00B0C`;
        tempMax.textContent = `${kToC(weather.tempMax)} \u00B0C`;
        clouds.textContent = capitalize(weather.clouds);
        wind.textContent = `${weather.wind} MPH`;
        date.textContent = dateLocation();
    } catch (error){
        tempText.textContent = "Error"
    }
}

let monthArr = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
getWeather('chicago')

//document.getElementById("container").style.background-image = "url(./Assets/rainyDay.webp)"

const dateLocation = () => {
    let locationDate = new Date();
    return `${monthArr[locationDate.getMonth()]} ${locationDate.getDate()}, ${locationDate.getUTCFullYear()}`
}

dateLocation()
form.addEventListener('submit', e => {
    e.preventDefault();
    const newInput = input.value;
    const newHead = document.createElement('h1')
    getWeather(newInput);
    document.body.appendChild(newHead)
    input.value = null


})

const kToC = (k) => {
    return Math.floor(k -273.15)
}


const capitalize = (str) => {
    const arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    return arr.join(" ")
}

//Background is in body

//document.body.background = "./Assets/rainyDay.webp"


const setBackground = (time) => {
    if (time > 6 && time <= 7){
        document.body.background = "./Assets/sunrise.jpeg"
    } else if (time > 7 && time <= 17 ){
        document.body.background = "./Assets/day.jpeg"
    } else if (time > 17 && time <= 18 ){
        document.body.background = "./Assets/sunset.jpeg"
    } else {
        document.body.background = "./Assets/rainyDay.webp"
    }
}

setBackground(time)

// {"coord":{"lon":-87.65,"lat":41.85},
// "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
// "base":"stations",
// "main":{"temp":297,"feels_like":297.24,"temp_min":293.94,"temp_max":298.8,"pressure":1008,"humidity":69},
// "visibility":10000,
// "wind":{"speed":0.45,"deg":315,"gust":0.89},
// "clouds":{"all":0},
// "dt":1662040782,
// "sys":{"type":2,"id":2011010,"country":"US","sunrise":1662030993,"sunset":1662078304},
// "timezone":-18000,
// "id":4887398,
// "name":"Chicago",
// "cod":200}