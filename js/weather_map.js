const getForecast = async (weather) => {
    try{
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather${weather}`)
        let data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
};

(async() =>{
    let weatherInfo = await getForecast();
    console.log(weatherInfo);
})();