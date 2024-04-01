//declaration for parent classes
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const weatherCard =  document.querySelector(".weatherCard");
const apiKey = "ae5c7ff1c5fda3985ac313b22728fed3";


//event listerner for the form
weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{

            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }
        catch(error){
            console.error(error);
            displayError(error);
        }

    }

    else{
        displayError("Please enter a city")
    }

});

async function getWeatherData(city){


    //api url from openweathermap.org

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const resp = await fetch(apiUrl);

    if(!resp.ok){
        throw new Error("could not fetch weather data");
    }
    return await resp.json();

};

function displayWeatherInfo(data){

    //object destructing from rep.json()

    const {name: city,
           main:{temp,humidity},
           weather: [{description,id,icon}]} = data;

//Hierrachy...............
    //modify parent element
    //change parent child display from none to flex
    //create child element
    //modify child element
    //modify style by adding class to child element
    //append child element
    
    weatherCard.textContent = "";
    weatherCard.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("img");

   
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273)* (9/5) + 32).toFixed(2)}°F`;
    humidDisplay.textContent = `${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.src =  `https://openweathermap.org/img/wn/${icon}@2x.png`;
   

   
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidDisplay.classList.add("humidDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

  
    weatherCard.appendChild(cityDisplay);
    weatherCard.appendChild(tempDisplay);
    weatherCard.appendChild(humidDisplay);
    weatherCard.appendChild(descDisplay);
    weatherCard.appendChild(weatherEmoji);

};


function displayError(message){
 // access element
 // modify or style it by adding classlist
 // then append it to its parent element (div)
 
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    weatherCard.textContent = "";
    weatherCard.style.display = "flex";
    weatherCard.appendChild(errorDisplay);
}