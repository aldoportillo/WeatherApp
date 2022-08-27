console.log("hello world")

async function getWeather (location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=6b90e7ed6704a9984fc25f85e2580025`, {mode: 'cors'})
        const weatherData = await response.json();
        console.log(weatherData)
    } catch (error){
        console.log("Location not found")
    }
}

