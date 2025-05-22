const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const city = 'Sunrise Valley'; // Replace with the chamber's location
const weatherContainer = document.getElementById('weather-data');

// Fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`);
        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherContainer.innerHTML = '<p>Unable to load weather data.</p>';
    }
}

// Display weather data
function displayWeather(data) {
    const currentWeather = data.list[0];
    const forecast = data.list.slice(1, 4); // Get the next 3 forecasts

    weatherContainer.innerHTML = `
        <p><strong>Current Temperature:</strong> ${currentWeather.main.temp}°F</p>
        <p><strong>Weather:</strong> ${currentWeather.weather[0].description}</p>
        <h3>3-Day Forecast:</h3>
        <ul>
            ${forecast.map(day => `
                <li>
                    <strong>${new Date(day.dt_txt).toLocaleDateString()}</strong>: 
                    ${day.main.temp}°F, ${day.weather[0].description}
                </li>
            `).join('')}
        </ul>
    `;
}

// Initialize
fetchWeather();