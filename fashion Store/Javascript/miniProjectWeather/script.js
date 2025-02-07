function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "7e751c58c801465aa8f181939250702";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <p><strong>City:</strong> ${data.location.name}, ${data.location.country}</p>
                <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
                <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="Weather icon">
            `;
            document.getElementById("weatherResult").innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `
                <p style="color: red;">City not found!</p>
                <img src="./public/img/notFound.gif" class="img-fluid w-50" alt="Not found gif">
            `;
            console.error("Error fetching weather:", error);
        });
        
}
