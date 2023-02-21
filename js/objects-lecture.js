"use strict";

const currentWeather = {
    temperature: 54.4,
    humidity: 28,
    clouds:0,
    windDirection: "NNE"
}
/** To access object properties, use dot notation**/

// console.log(currentWeather.temperature);

function displayWeatherProperty(prop){
    // console.log(currentWeather[prop]);
}

// console.log(currentWeather.clouds);
/** MUST use bracket notation if assigning a key/property of an object to a variable**/
let weatherProperty = "clouds";
// console.log(currentWeather["clouds"]);
// console.log(currentWeather[weatherProperty]);

/** Can do string and math operations on values**/
// console.log(`The current temperature in celsius is ${((currentWeather.temperature- 32) * 5/9).toFixed(1)}`);


if (currentWeather.temperature < 80){
    // console.log("It is so cold!!!");
} else {
    // console.log("Ahhh nice and warm");
}

/** Objects are dynamic; I can change object property values**/
currentWeather.temperature = 63.7;
/**I can delete an object property**/
delete currentWeather.humidity;
/**I can create new properties**/
currentWeather.rain = false;

/** Can use for in loop to loop through an object's properties, getting their keys**/
for (let property in currentWeather){
    // // console.log(property);
    // // console.log(currentWeather[property]);
    // console.log(property + ": " + currentWeather[property]); //pulls out everything; bracket notation pulls out the values
}


const hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];



hourlyWeather.forEach(hourlyForecast => console.log(hourlyForecast.temperature));


for (let i = 0; i <hourlyWeather.length; i++){
    console.log(hourlyWeather[i]);
}

for (let i = 0; i <hourlyWeather.length; i++){
    console.log(hourlyWeather[i].temperature);
}

/**for...of loop**/

for (const forecast of hourlyWeather){
    console.log(forecast.temperature);
}