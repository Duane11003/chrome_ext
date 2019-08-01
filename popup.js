// const getAndDisplayWeather = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(() => {
//         getLocalWeather(40.7128,-74.0060)
//       })
//     }
//     else { console.log('No geolocation so no app frown face') }
//   }


let weatherAPIKey = '88182033965521ab3c2ac294b5453885';
  let mainText = document.querySelector('.main-text');
let localWeather = document.querySelector('.local-weather');
// let container = document.querySelector('.container');
// container.style.backgroundImage = "url('https://unsplash.com/photos/deNAgNLr0b8')";




  const getWeather = fetch('http://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&APPID=88182033965521ab3c2ac294b5453885')
  .then(res => res.json())
  .then(myJson => {
      let temperature = myJson.main.temp;
      let farenheightTemp = Math.floor(9/5 * (temperature - 273) +32);
      let conditions = myJson.weather[0].description;
      console.log("Current conditions: " + conditions);
      console.log("Current temperature: " + farenheightTemp);
      mainText.innerHTML = "Current Conditions in New York: " +conditions+ " Temperature: " + farenheightTemp + " degrees";
      updateBackground(conditions)
    })

    // setInterval(getWeather, 100000)

  

const clearUrl = 'https://unsplash.com/search/clear-sky?photo=fuAy6Gs8QCw';
const cloudUrl = 'https://unsplash.com/search/cloudy?photo=S7ChB4FBboI';
const rainUrl = 'https://unsplash.com/search/rain?photo=vg6zo_GJf1k';
const snowUrl = 'https://unsplash.com/search/snow?photo=67t2GJcD5PI';




const updateBackground = (weather) => {
    fetch(`https://api.unsplash.com/photos/random?query=${weather}&client_id=8b54b91334257d9cba265ba432a52138f247fba296369bc508b6c3f243c1e93f`)
    .then(image => localWeather.style.backgroundImage = `url(${image}) no-repeat center center fixed`)
    //setDefaultBackground(weather)
  }

  const setDefaultBackground = (weather) => {
    weather.toLowerCase().includes('rain') ?  localWeather.style.background = `url(${rainUrl}) no-repeat center center fixed` : null;
    weather.toLowerCase().includes('clear') ? localWeather.style.background = `url(${clearUrl}) no-repeat center center fixed` : null;
    weather.toLowerCase().includes('snow') ? localWeather.style.background = `url(${snowUrl}) no-repeat center center fixed` : null;
    weather.toLowerCase().includes('cloud') ? localWeather.style.background = `url(${cloudUrl}) no-repeat center center fixed` : null;
  }

// https://api.unsplash.com/photos/random?query=${weather}&client_id=8b54b91334257d9cba265ba432a52138f247fba296369bc508b6c3f243c1e93f

// key 8b54b91334257d9cba265ba432a52138f247fba296369bc508b6c3f243c1e93f