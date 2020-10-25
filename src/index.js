function displayTemperature(response) {
let temperatureElement = document.querySelector("temperature");
let cityElement = document.querySelector("#city-name")
temperatureElement.innerHTML = Math.round(response.data.main.temp)
cityElement.innerHTML = response.data.name; 
}
let apiKey = `cbbbf47964f1e326cc360a17986bc388`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);


function currentDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let hour = ("0" + now.getHours()).slice(-2);
  let minutes = ("0" + now.getMinutes()).slice(-2);

  return `${day}, ${hour}:${minutes}`;
}

function showCelciusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = temperature;
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#condition")
  let minTemp = Math.round(response.data.main.temp_min);
  let minTempElement = document.querySelector("#min-temperature");
  let maxTemp = Math.round(response.data.main.temp_max);
  let maxTempElement = document.querySelector("#max-temperature");
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  let feelTemp = Math.round(response.data.main.feels_like);
  let feelTempElement = document.querySelector("#feels-like");
  let iconElelment = document.querySelector("#icon")
  let celciusTemp = document.querySelector("#temperature");
  let fahrenheitTemp = document.querySelector("#temperature-fahrenheit");

  temperatureElement.innerHTML = temperature;
  descriptionElement.innerHTML = `${description}`;
  minTempElement.innerHTML = `Lowest: ${minTemp}°C`;
  maxTempElement.innerHTML = `Highest: ${maxTemp}°C`;
  humidityElement.innerHTML = `Humidity: ${humidity}%`;
  feelTempElement.innerHTML = `Feels like: ${feelTemp}°C`;
  iconElelment.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`) 

  celciusTemp.addEventListener("click", showCelciusTemp);
  fahrenheitTemp.addEventListener("click", showFahrenheitTemp);
}

function showCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-city");
  let city = document.querySelector("h1");
  let apiKey = `cbbbf47964f1e326cc360a17986bc388`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
  city.innerHTML = input.value;

  axios.get(apiUrl).then(showTemperature);
}

let currentTime = document.querySelector("#current-time");
let now = new Date();
currentTime.innerHTML = currentDate(now);

let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", showCity);
