// Example: Populate news section
document.addEventListener('DOMContentLoaded', () => {
    const newsContent = document.getElementById('news-content');
    newsContent.innerHTML = `
        <ul>
            <li>UPL kicks off this weekend with exciting fixtures!</li>
            <li>Grassroots football tournament announced for July.</li>
            <li>Player spotlight: Meet Uganda’s rising star, John Okello.</li>
        </ul>
    `;

    // Example: Populate weather section (static for demo)
    const weatherContent = document.getElementById('weather-content');
    weatherContent.textContent = "Kampala: 27°C, Partly Cloudy";

    // Historic Updates Data
    const historicUpdates = [
        {
            year: "1977",
            message: "SC Villa was founded, becoming one of Uganda's most successful football clubs.",
            img: "images/scvilla_1977.jpg"
        },
        {
            year: "1978",
            message: "Uganda Cranes reached the Africa Cup of Nations final, finishing as runners-up to Ghana.",
            img: "images/uganda_cranes_1978.jpg"
        },
        {
            year: "1993",
            message: "Express FC won the Uganda Premier League, marking a golden era for the club.",
            img: "images/express_1993.jpg"
        },
        {
            year: "1997",
            message: "KCCA FC clinched the league title, cementing their status as a powerhouse in Ugandan football.",
            img: "images/kcca_1997.jpg"
        },
        {
            year: "1982",
            message: "The Uganda Premier League was officially established, bringing structure to national football.",
            img: "images/upl_1982.jpg"
        }
        // Add more as needed
    ];

    const historicMessageDiv = document.getElementById('historic-message');
    let historicIndex = 0;

    function showHistoricUpdate() {
        const update = historicUpdates[historicIndex];
        historicMessageDiv.innerHTML = `
            <div class="historic-card">
                <img src="${update.img}" alt="Ugandan Football ${update.year}" class="historic-img">
                <div class="historic-text">
                    <h3>${update.year}</h3>
                    <p>${update.message}</p>
                </div>
            </div>
        `;
        historicIndex = (historicIndex + 1) % historicUpdates.length;
    }

    showHistoricUpdate(); // Show first message immediately
    setInterval(showHistoricUpdate, 120000); // Change every 2 minutes (120,000 ms)
});

console.log("JS loaded!");