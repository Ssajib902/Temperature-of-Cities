// console.log("Connected");

const API_KEY = `c9cf34db7487e8cf9c06e677d5526910`;

const loadtemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url) .then(res => res.json()) .then(data=>displayTemp(data
        ))
};

const displayTemp = data => {
    const temp = document.getElementById('temperature');
    console.log(data.main);
    temp.innerText = `
    ${data.main.temp}
    `;
    // .appendChild(data);
}

loadtemperature('Dhaka');
