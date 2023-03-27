
const currentWeatherItemsE1 = document.querySelector('#current-weather-items');
const timezone = document.querySelector('.time-zone');
const countryElement = document.querySelector('#country');
const weatherForecast = document.querySelector('#weather-forecast');
const currentTemp = document.querySelector('#current-temp');


const getFiveDayForecast = async (lat, long) => {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=imperial&appid=${OPEN_WEATHER_API}`)
        let data = await response.json();
        let forecast = [];
        data.list.forEach(function(element, index){
            if ((index + 1) % 8 === 0) {
                forecast.push(element)
            }
        })
        return forecast;

    } catch (error) {
        console.log(error);
    }
}

function setFiveDayForecast(forecasts){
    let target = document.querySelector('#fiveDay');
    target.innerHTML = '';
    forecasts.forEach(function(day){
        let node = document.createElement('div');
        node.classList.add('weather-forecast');
        node.innerHTML = `
            <div class="weather-forecast-item">
                <div class="day">${day.dt.dt_txt}</div>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="text">Humidity - ${day.main.humidity}</div>
                <div class="text">Feels Like - ${day.main.feels_like}&#8457;</div>
                <div class="text">Max - ${day.main.temp_max}&#8457;</div>
                <div class="text">Min - ${day.main.temp_min}&#8457;</div>
            </div>
        `;
        target.appendChild(node);
    });
}


const getCurrentForecast = async (lat, long) => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${OPEN_WEATHER_API}`)
        let data = await response.json();
        console.log(data);
    } catch (error){
        console.log(error);
    }
}


function setCurrentWeather(forecasts){
    let target = document.querySelector('#current-weather-items');
    target.innerHTML = '';
    forecasts.forEach(function(day){
        let node = document.createElement('div');
        node.classList.add('c-weather-item');
        node.innerHTML = `
            <div class="weather-item">
                <div class="feelsLike">Feels Like</div>
                <div>${day.main.feels_like}</div>
            </div><div class="weather-item">
            <div class="humidity">Humidity</div>
                <div>${day.main.humidity}</div>
            </div>
            <div class="weather-item">
                <div class="pressure">Pressure</div>
                <div>${day.main.pressure}</div>
            </div>
            <div class="weather-item">
                <div class="windSpeed">Wind Speed</div>
                <div>${day.wind.speed}</div>
            </div>
            <div class="weather-item">
                <div class="sunrise">Sunrise</div>
                <div>${day.main.temp}</div>
            </div>
            <div class="weather-item">
                <div class="sunset">Sunset</div>
                <div>${day.main.temp}</div>
            </div>
        `;
        target.appendChild(node);
    });
}


async function getCurrentCoords() {
    // return navigator.geolocation.getCurrentPosition((position) => position.coords);
    return {
        longitude: '-98.4946',
        latitude: '29.4252'
    }
}


function setCurrentTime() {
    const timeE1 = document.querySelector('#time');
    const dateElement = document.querySelector('#date');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    /**SETTING DATE AND TIME - interval is every second**/
    setInterval(() => {
        const time = new Date();
        const month = time.getMonth();
        const date = time.getDate();
        const day = time.getDay();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hour >= 12 ? 'PM' : 'AM';

        timeE1.innerHTML = hour + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`;

        dateElement.innerHTML = days[day] + ', ' + date + ' ' + months[month];

    }, 1000);
}


(async () => {
   setCurrentTime();
    let coords = await getCurrentCoords();
    let fiveDayForecast = await getFiveDayForecast(coords.latitude, coords.longitude);
    console.log(fiveDayForecast);
    setFiveDayForecast(fiveDayForecast);
    let currentForecast = await getCurrentForecast(coords.latitude, coords.longitude);
    console.log(currentForecast);
    setCurrentWeather(currentForecast);
})();
