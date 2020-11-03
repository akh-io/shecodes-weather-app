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
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let day = days[now.getDay()];
  let dayPlusTwo = days[now.getDay()+2]
  let dayPlusTwoElement = document.querySelector("#date-plus-two")
  let dayPlusThree = days[now.getDay()+3]
  let dayPlusThreeElement = document.querySelector("#date-plus-three")
  let dayPlusFour = days[now.getDay()+4]
  let dayPlusFourElement = document.querySelector("#date-plus-four")
  let dayPlusFive = days[now.getDay()+5]
  let dayPlusFiveElement = document.querySelector("#date-plus-five")
  let hour = ("0" + now.getHours()).slice(-2);
  let minutes = ("0" + now.getMinutes()).slice(-2);

  dayPlusTwoElement.innerHTML = `${dayPlusTwo}`
  dayPlusThreeElement.innerHTML = `${dayPlusThree}`
  dayPlusFourElement.innerHTML = `${dayPlusFour}`
  dayPlusFiveElement.innerHTML = `${dayPlusFive}`
  return `${day}, ${hour}:${minutes}`;
}


function showFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  celciusLink.classList.remove("active")
  fahrenheitLink.classList.add("active")
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelciusTemp(event) {
  event.preventDefault();
  celciusLink.classList.add("active")
  fahrenheitLink.classList.remove("active")
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);


}

function showTemperature(response) {
  celsiusTemperature = response.data.main.temp;
  let temperature = Math.round(celsiusTemperature);
  let temperatureElement = document.querySelector("#temperature");
  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#condition");
  let minTemp = Math.round(response.data.main.temp_min);
  let minTempElement = document.querySelector("#min-temperature");
  let maxTemp = Math.round(response.data.main.temp_max);
  let maxTempElement = document.querySelector("#max-temperature");
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  let feelTemp = Math.round(response.data.main.feels_like);
  let feelTempElement = document.querySelector("#feels-like");
  let iconElelment = document.querySelector("#icon");
  
 
  temperatureElement.innerHTML = temperature;
  descriptionElement.innerHTML = `${description}`;
  minTempElement.innerHTML = `Lowest: ${minTemp}°C`;
  maxTempElement.innerHTML = `Highest: ${maxTemp}°C`;
  humidityElement.innerHTML = `Humidity: ${humidity}%`;
  feelTempElement.innerHTML = `Feels like: ${feelTemp}°C`;
  iconElelment.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`) 
  iconElelment.setAttribute("alt", response.data.weather[0].description)
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#temperature-fahrenheit");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celciusLink = document.querySelector("#temperature-celcius");
celciusLink.addEventListener("click", showCelciusTemp);


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
