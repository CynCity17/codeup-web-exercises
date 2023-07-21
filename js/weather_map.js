import keys from './keys.js';
import {formatTime, windCardinalDirection, appendLeadingZeroes, dateFromTimeStamp, namedDayFromDay, dayOfWeekFromDayAbbreviated, mostFrequent, average} from './weather_utils';

const currentWeatherItemsE1 = document.querySelector('#current-weather-items');
const timezone = document.querySelector('.time-zone');
const countryElement = document.querySelector('#country');
const weatherForecast = document.querySelector('#weather-forecast');
const currentTemp = document.querySelector('#current-temp');

const getFiveDayForecast = async (lat, long) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=imperial&appid=${keys.OPEN_WEATHER_API}`);
        const data = await response.json();
        const forecast = data.list.filter((element, index) => (index + 1) % 8 === 0);
        return forecast;
    } catch (error) {
        console.log(error);
    }
};

function setFiveDayForecast(forecasts) {
    const target = document.querySelector('#fiveDay');
    target.innerHTML = '';

    forecasts.forEach((day) => {
        const node = document.createElement('div');
        node.classList.add('weather-forecast');
        node.innerHTML = `
      <div class="weather-forecast-item">
        <div class="day">${day.dt_txt}</div>
        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="weather icon" class="w-icon">
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
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${keys.OPEN_WEATHER_API}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

function setCurrentWeather(forecast) {
    const target = document.querySelector('#current-weather-items');
    target.innerHTML = '';

    const node = document.createElement('div');
    node.classList.add('c-weather-item');
    node.innerHTML = `
    <div class="weather-item">
      <div class="feelsLike">Feels Like</div>
      <div>${forecast.main.feels_like}</div>
    </div>
    <div class="weather-item">
      <div class="humidity">Humidity</div>
      <div>${forecast.main.humidity}</div>
    </div>
    <div class="weather-item">
      <div class="pressure">Pressure</div>
      <div>${forecast.main.pressure}</div>
    </div>
    <div class="weather-item">
      <div class="windSpeed">Wind Speed</div>
      <div>${forecast.wind.speed}</div>
    </div>
    <div class="weather-item">
      <div class="sunrise">Sunrise</div>
      <div>${formatTime(forecast.sys.sunrise)}</div>
    </div>
    <div class="weather-item">
      <div class="sunset">Sunset</div>
      <div>${formatTime(forecast.sys.sunset)}</div>
    </div>
  `;

    target.appendChild(node);
}

async function getCurrentCoords() {
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const fiveDayForecast = await getFiveDayForecast(lat, long);
        const currentForecast = await getCurrentForecast(lat, long);

        setFiveDayForecast(fiveDayForecast);
        setCurrentWeather(currentForecast);
    } catch (e) {
        console.log(e);
    }
}

function setCurrentTime() {
    const timeE1 = document.querySelector('#time');
    const dateElement = document.querySelector('#date');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
    await getCurrentCoords();
})();
