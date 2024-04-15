const API_KEY = "3f59e4d9f7f19e8faca53a0a7281b6a8";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  console.log(lat);
  console.log(lng);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}`;
      city.innerText = data.name;
    });
}
function onGeoErr() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
