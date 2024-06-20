const apiKey = "c6c3a5d9e166e8815aec8bc07e9793b9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const submit = document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".weather-icon");

async function check(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block"
    }else{
        const data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main=="Clouds"){
           weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main=="Clear"){
           weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main=="Rain"){
           weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main=="Mist"){
           weatherIcon.src = "images/mist.png";
        }else if(data.weather[0].main=="Drizzle"){
           weatherIcon.src = "images/drizzle.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"
    }
}

submit.addEventListener('click',()=>{
    check(search.value);
})
