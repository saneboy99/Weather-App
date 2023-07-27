const apiKey = "27a7522197c38059ebe81bd629cf4add";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=islamabad";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();
