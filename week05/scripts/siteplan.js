// Set year and last modified date
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Update current time every second
    function updateTime() {
        const now = new Date();
        document.getElementById('currentTime').textContent = now.toLocaleTimeString();
        document.getElementById('currentDate').textContent = now.toLocaleDateString();
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Simple weather fetch for Kampala (change city if needed)
    fetch('https://wttr.in/Kampala?format=%t,+%C')
        .then(response => response.text())
        .then(data => {
            document.getElementById('weatherInfo').textContent = data;
        })
        .catch(() => {
            document.getElementById('weatherInfo').textContent = "Unavailable";
        });
});