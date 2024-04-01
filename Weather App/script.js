const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const weatherCard =  document.querySelector(".weatherCard");
const apiKey = "ae5c7ff1c5fda3985ac313b22728fed3";

weatherForm.addEventListener("submit", event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){

    }

    else{
        displayError("Please enter a city")
    }

});

async function getWeatherData(city){

};

function displayDataInfo(data){

};

function getWeatherEmoji(weatherid){

};

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    weatherCard.textContent = "";
    weatherCard.style.display = "flex";
    weatherCard.appendChild(errorDisplay);
}