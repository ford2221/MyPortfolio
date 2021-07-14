//the coins

const container = document.querySelector(".the-card");
const card = document.querySelector(".card");
const title = document.querySelector(".title");
const description = document.querySelector(".card p");
const purchase = document.querySelector(".Coin");


container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(125px)";
  purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});


//the weather

const containerWeather = document.querySelector(".weather-card");
const cardweather = document.querySelector(".cardweather");
const titleWeather = document.querySelector(".title-weather");
const p = document.querySelector(".cardweather p");
const weather = document.querySelector(".weather");

containerWeather.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  cardweather.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

containerWeather.addEventListener("mouseenter", (e) => {
  cardweather.style.transition = "none";
  titleWeather.style.transform = "translateZ(150px)";
  p.style.transform = "translateZ(125px)";
  weather.style.transform = "translateZ(75px)";
});

containerWeather.addEventListener("mouseleave", (e) => {
  cardweather.style.transition = "all 0.5s ease";
  cardweather.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  titleWeather.style.transform = "translateZ(0px)";
  p.style.transform = "translateZ(0px)";
  weather.style.transform = "translateZ(0px)";
});

