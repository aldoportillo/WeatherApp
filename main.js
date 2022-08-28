console.log("hello world")

async function getWeather (location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=6b90e7ed6704a9984fc25f85e2580025`, {mode: 'cors'})
        const weatherData = await response.json();
        const weather = {
            Temperature: weatherData.main.temp,
            FeelsLike: weatherData.main.feels_like,
            Humidity: weatherData.main.humidity,
            TempMin: weatherData.main.temp_min,
            TempMax: weatherData.main.temp_max,
            Clouds: weatherData.weather[0].description,
            Wind: weatherData.wind.deg,
            WindSpeed: weatherData.wind.speed,
        }
        console.log(weatherData)//Note to future self.. Maybe you can use recursion to loop through the entire object and compare it to an array of keys
        console.log("Temperature in K " + weatherData.main.temp)
        console.log("Feels like " + weatherData.main.feels_like)
        console.log("Humidity " + weatherData.main.humidity)
        console.log("Temp low " + weatherData.main.temp_min)
        console.log("Temp Max " + weatherData.main.temp_max)
        console.log("Weather " + weatherData.weather[0].main)
        console.log("Weather description " + weatherData.weather[0].description)
        console.log("Wind " + weatherData.wind.deg)
        console.log("Wind Speed "+ weatherData.wind.speed)
        console.log(weather)
    } catch (error){
        console.log("Location not found")
    }
}

