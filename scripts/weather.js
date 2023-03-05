// console.log("Connected");

const API_KEY = `c9cf34db7487e8cf9c06e677d5526910`;

const loadtemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
};

const displayTemp = data => {
    const temperature = document.getElementById('temperature');
    // console.log(data.main);
    temperature.innerText = data.main.temp;
    // console.log(temperature);

    const cityName = document.getElementById('city-name');
    // console.log(cityName);
    cityName.innerHTML = `${data.name}`;

    const tempDetails = document.getElementById('temp-details');
    tempDetails.innerHTML = `${data.weather[0].main}`

}
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    // console.log(searchField);
    const city = searchField.value;
    loadtemperature(city);

})



loadtemperature('Dhaka');
