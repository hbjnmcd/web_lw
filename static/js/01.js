function loadWeather() {
    const city = document.getElementById('city-input');
    const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

    fetch(url).then(
        response => response.json()
    ).then(data => {
        const currentCondition = data.current_condition[0];

        const html = `<h5>Погода для города "${city.value}"</h5>
        <ul>
            <li>Время: ${currentCondition.observation_time}</li>
            <li>Температура: ${currentCondition.temp_C}°C (${currentCondition.temp_F}°F)</li>
            <li>Влажность: ${currentCondition.humidity} %</li>
        </ul>`;

        const wheatherContainer = document.getElementById('weather');
        wheatherContainer.innerHTML = html;
        wheatherContainer.style.display = 'block';
    })
}