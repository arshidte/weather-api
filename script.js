function fetchWeather() {
    let cityName = document.querySelector("#cityName").value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Error occured while fetching the data")
            }
        }).then(data => displayValues(data)).catch(err=>console.log(err.message));
}


function displayValues(data) {
    let html_data = ``
    let location = data.name;
    let temp = data.main.temp;
    let temp_max = data.main.temp_max;
    let temp_min = data.main.temp_min;
    let typeWeather = data.weather[0].main;
    let windSpeed = data.wind.speed;

    html_data += `<div class="card" style="width: 18rem;">
    <div class="card-header">
      <h3>${location}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Temperature: ${temp}</li>
      <li class="list-group-item">Maximum Temperature: ${temp_max}</li>
      <li class="list-group-item">Minimum Temperature: ${temp_min}</li>
      <li class="list-group-item">Type of weather: ${typeWeather}</li>
      <li class="list-group-item">Speed of wind: ${windSpeed}</li>
    </ul>
  </div>`

  document.querySelector('#result').innerHTML=html_data;
}