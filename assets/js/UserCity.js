console.log("hello world");
// inputCity
var cityAPIResults = document.querySelector("cityResults");
var userCity = document.querySelector("#cityInput");
console.log(userCity);
var queryButton = document.getElementById("searchButton");
console.log(queryButton);
var airQualityAPIResults = document.getElementById("airQualityResults");
console.log(airQualityAPIResults);
var localCurrencyAPIResults = document.getElementById("localCurrency");
var exchangeRateAPIResults = document.getElementById("exchangeRate");
var airfareAPIResults = document.getElementById("airfareRestults");
var cityTitle = document.getElementById("userInputCity");

userCity.addEventListener('keyup',(e)=>{
    e.preventDefault();
     if(e.keyCode === 13){
         queryButton.click(); // triggering click if `keycode === 13`
    }
  })

function addCityTitle() {
    console.log(userCity.value);
    var cityTitle = document.createElement("h1")
    cityTitle.textContent = userCity.value;
    cityAPIResults.appendChild(cityTitle);
 }

//Input interface for air quality API here
 function airQualityAPI() {
    getAQI(userCity.value,aqi=>{
        console.log(aqi)
        airQualityAPIResults.innerText = "Air quality in " + userCity.value + " is " + aqi + " today";
    });
}

//Input interface for Currency and Exchange Rate here
function financialInfo() {
    getCurrencyExchangeRate(userCity.value, json=>{
        localCurrencyAPIResults.innerText = "Local currency is the " + json.new_currency;
        exchangeRateAPIResults.innerText = "Exchange rate is " + json.new_amount;
    },
    ()=>{console.log('fetch call failed!')});   
}

// userCity.addEventListener()

queryButton.addEventListener("click",airQualityAPI)
queryButton.addEventListener("click",financialInfo)
queryButton.addEventListener("click",addCityTitle);





