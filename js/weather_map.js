getWeatherLocal()
function getWeatherLocal (){
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);

        let {latitude, longitude} = position.coords;

const getForecast = async (weather) => {
    try{
        let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&cnt=7&appid=${OPEN_WEATHER_API}`)
        let data = await response.json();
        return data;

    } catch(error) {
        console.log(error);
    }
}

        (async() =>{
            let weatherInfo = await getForecast();
            console.log(weatherInfo);
        })();

        function getWeatherInfo(weatherInfo){
            let {humidity, pressure, sunrise, sunset, wind_speed, feels_like} = weatherInfo;

            timezone.innerHTML = data.city.timezone;
            countryElement.innerHTML = data.latitude + 'N' + data.longitude + 'E';

            currentWeatherItemsE1.innerHTML =
                `<div class="weather-item">
                    <div class="feelsLike">Feels Like</div>
                    <div>${feels_like}</div>
                </div><div class="weather-item">
                <div class="humidity">Humidity</div>
                    <div>${humidity}</div>
                </div>
                <div class="weather-item">
                    <div class="pressure">Pressure</div>
                    <div>${pressure}</div>
                </div>
                <div class="weather-item">
                    <div class="windSpeed">Wind Speed</div>
                    <div>${wind_speed}</div>
                </div>
            <div class="weather-item">
                    <div class="pressure">Sunrise</div>
                    <div>${window.moment(sunrise * 1000).format('LT')}</div>
                </div>
                <div class="weather-item">
                    <div class="windSpeed">Sunset</div>
                    <div>${window.moment(sunset * 1000).format('LT')}</div>
                </div>`;

            let otherDayForecast = ''
            data.list.forEach((day, idx) =>{
                if(idx === 0){
                    currentTemp.innerHTML =
                        `<div class="day">${window.moment(day.dt).format('ddd')}</div>
                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
                    <div class="other">
                        <div class="temp">Night - ${day.temp.night}&#8457;</div>
                        <div class="temp">Day - ${data.list[0].main.temp}&#8457;</div>
                    </div>`
                }else{
                    otherDayForecast +=
                        `<div class="weather-forecast-item">
                        <div class="day">${window.moment(day.dt).format('ddd')}</div>
                        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                        <div class="temp">Night - ${day.temp.night}&#8457;</div>
                        <div class="temp">Day - ${day.temp.day}&#8457;</div>
                    </div>`
                }
            })

            weatherForecast.innerHTML = otherDayForecast;

        }
    })
}



/**SOMETHING I TRIED & NOT SURE IF I WANT TO KEEP YET**/
// data.list.forEach((weatherInfo, index) => {
//     if (index % 8 === 0 && index !== 0) {
//
//         console.log(weatherInfo.dt_txt);
//         console.log(weatherInfo.weather[0].description);
//     }
// })






const timeE1 = document.querySelector('#time');
const dateElement = document.querySelector('#date');
const currentWeatherItemsE1 = document.querySelector('#current-weather-items');
const timezone = document.querySelector('.time-zone');
const countryElement = document.querySelector('#country');
const weatherForecast = document.querySelector('#weather-forecast');
const currentTemp = document.querySelector('#current-temp');

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
    const ampm = hour >=12 ? 'PM' : 'AM';

    timeE1.innerHTML = hour + ':' + (minutes < 10? '0' + minutes: minutes) + ' ' + `<span id="am-pm">${ampm}</span>`;

    dateElement.innerHTML = days[day] + ', ' + date + ' ' + months[month];

}, 1000);










/**STUFF FROM CLASS LESSON THAT I MISSED - Don't want to use AJAX/jQuery**/
// $.get("https://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_API,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });
//
// const SALong = -98.48527;
// const SALat = 29.423017;
//
// $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_API}&units=imperial`).done(data=>{
//     console.log(data);
//     console.log("The temperature is: " + data.main.temp);
//     $("#weather").html(`<p>The temperature is: ${data.main.temp}</p>`);
// });
//
// $.get("http://api.openweathermap.org/data/2.5/forecast", {
//     APPID: OPEN_WEATHER_API,
//     lat:    SALat,
//     lon:   SALong,
//     units: "imperial"
// }).done(function(data) {
//     console.log(data);
//     data.list.forEach((forecast, index) => {
//         if (index % 8 === 0 && index !== 0){
//             const time = new Date(forecast.dt * 1000);
//             console.log(time.getHours());
//             console.log(time.getTime());
//             console.log(time.getDay());
//             console.log(forecast.dt_txt);
//             console.log(forecast.weather[0].description);
//         }
//     });
// });

