// My API is still invalid (Currently Waiting...)
// 2580a79ce8a83caf97f686ff08887b25n

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// Other API
// bfe3651d709ea34e5fc59136856edaf6;

const searchInput = document.querySelector('.searchbar-input');
const searchBtn = document.querySelector('.searchbar-btn');
const unitSelector = document.querySelector('.unit-selector');
const weatherInfo = document.querySelector('.weather-info');

let city = 'yangon';
let unit = 'metric';

function fetchWeather(city, unit) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=bfe3651d709ea34e5fc59136856edaf6`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      if (data.message === 'city not found') {
        weatherInfo.innerHTML = `
        <h2> City Not Found! <br> Try Using Human City Name.</h2>
        `;
      } else {
        weatherInfo.innerHTML = `
    <h2 class='city-name'>${data.name} </h2>
    <p class='temperature'> ${data.main.temp} ${
          unit === 'metric' ? '°C' : unit === 'imperial' ? '°F' : 'K'
        } </p>
      <img src='http://openweathermap.org/img/wn/${
        data.weather[0].icon
      }@2x.png' class='weather-icon'/>
      <p class='weather-desc' >${data.weather[0].main}</p>
`;
      }
    });
}

fetchWeather(city, unit);

searchBtn.addEventListener('click', () => {
  city = searchInput.value;
  fetchWeather(city, unit);
});

unitSelector.addEventListener('click', (e) => {
  unit = e.target.value;
  fetchWeather(city, unit);
});




