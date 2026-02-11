const timeE1 = document.getElementById("time");
const dateE1 = document.getElementById("date");
const currentWeatherItemsE1 = document.getElementById("current-weather-items");
const weatherforecastE1 = document.getElementById("weather-forecast");

const API_KEY = "dc04854569ba47429ce183908261102";

/* -------- TIME -------- */

setInterval(() => {
  const time = new Date();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM";

  timeE1.innerHTML = `${hoursIn12HrFormat}:${minutes} <span id="am-pm">${ampm}</span>`;

  dateE1.innerHTML = time.toDateString();
}, 1000);

/* -------- WEATHER -------- */

getWeatherData();

function getWeatherData() {

  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=auto:ip&days=7&aqi=no&alerts=no`)
    .then(res => res.json())
    .then(data => {
      showWeatherData(data);
    })
    .catch(err => {
      console.error("Weather error:", err);
    });
}

function showWeatherData(data) {

  // Location
  document.getElementById("time-zone").innerHTML = data.location.name;
  document.getElementById("country").innerHTML = data.location.country;

  const current = data.current;

  currentWeatherItemsE1.innerHTML = `
    <div class="weather-item">
        <div>Humidity</div>
        <div>${current.humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${current.pressure_mb} mb</div>
    </div>
    <div class="weather-item">
        <div>Temp</div>
        <div>${current.temp_c}°C</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${current.wind_kph} kph</div>
    </div>
  `;

  let forecastHTML = "";

  data.forecast.forecastday.forEach(day => {

    let dayName = new Date(day.date)
      .toLocaleDateString("en-US", { weekday: "short" });

    forecastHTML += `
      <div class="weather-forecast-item">
          <div class="day">${dayName}</div>
          <img src="${day.day.condition.icon}" 
          alt="weather icon" class="w-icon">
          <div class="temp">Min - ${day.day.mintemp_c}°C</div>
          <div class="temp">Max - ${day.day.maxtemp_c}°C</div>
      </div>
    `;
  });

  weatherforecastE1.innerHTML = forecastHTML;
}