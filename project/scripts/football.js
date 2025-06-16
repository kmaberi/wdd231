import ugandaFootballHistory from './ugandaFootballHistory.js';

function renderHistorySlide() {
    const historyContainer = document.getElementById("historyContent");
    historyContainer.innerHTML = ''; // Clear container

    // Create a single element for the sliding event.
    const slideEl = document.createElement('div');
    slideEl.classList.add("history-event");
    historyContainer.appendChild(slideEl);

    // Get a subset (e.g., five most recent events)
    const recentEvents = ugandaFootballHistory.slice(-5);
    let index = 0;

    // Function to update the slide
    function showNextEvent() {
        // First, remove the "show" class to trigger fade-out/slide-out
        slideEl.classList.remove('show');

        // After transition duration (500ms), update the content and slide back in
        setTimeout(() => {
            const event = recentEvents[index];
            slideEl.innerHTML = `<p><strong>${new Date(event.date).toLocaleDateString()}</strong> (${event.place}): ${event.description}</p>`;
            slideEl.classList.add('show');
            index = (index + 1) % recentEvents.length;
        }, 500);
    }

    // Immediately show the first event, then change every 10 seconds
    showNextEvent();
    setInterval(showNextEvent, 10000);
}

document.addEventListener("DOMContentLoaded", () => {
    // --- Visit Counter ---
    let visits = localStorage.getItem("visitCount") ? Number(localStorage.getItem("visitCount")) : 0;
    visits++;
    localStorage.setItem("visitCount", visits);
    document.getElementById("visitCount").textContent = visits;

    // --- Dynamic Latest News ---
    // Array of news items highlighting Vipers SC's historic double and ongoing activities
    const newsData = [
        {
            title: "Vipers SC Complete Historic Double",
            content: `Vipers SC had an outstanding 2024/25 season in the StarTimes Uganda Premier League, securing their seventh league title with a commanding performance.Vipers clinched the title with 68 points from 29 matches, finishing four points ahead of second-placed NEC FC.The decisive 2-0 victory over Kitara FC in Hoima, with goals from Gusto Mulongo and Yunus Sentamu, secured the championship with a match to spare.Allan Okello led the league with 19 goals, including a league-high eight penalties.In the 2024/25 Stanbic Uganda Cup, Vipers SC reached the quarterfinal stage. They progressed comfortably after a dominant 3-0 win over Blacks Power FC, where Yunus Sentamu played a key role—scoring in the first half and assisting another goal. Despite their strong showing in the earlier rounds, their cup run ended before the semifinals, falling short of replicating their league success in the knockout competition. Nonetheless, their performance reflected depth and competitiveness across all domestic fronts.




  Vipers SC have etched their name into Ugandan football history by securing both the Uganda Premier League title and the Uganda Cup in the same season. Celebrated locally as "Salongo," the club dominated domestic competition with a potent attack and resolute defense. Fans joined in the celebrations as Vipers lifted the league trophy and then claimed the Cup in a convincing 2–0 win over KCCA FC.`,
            image: "images/double.jpeg" // New image for the historic double
        },
        {
            title: "Champions League Await: Vipers Set for Continental Challenge",
            content: `With the domestic double in the bag, Vipers SC are now turning their focus to the CAF Champions League. The squad is in high spirits as they prepare to face Africa's elite clubs. Training sessions are intensifying, and supporters eagerly await the continental kick-off.`,
            image: "images/champions_league.jpeg" // New image for the Champions League news

        },
        {
            title: "Transfer Window Manzoki: Iconic Striker Returns",
            content: `Vipers SC have been one of the busiest clubs in the current transfer window, making key signings to bolster their squad depth. The headline act is the surprising return of club legend Cesar Manzoki, whose goal-scoring prowess helped Sarongo dominate in seasons past. Fans can’t wait to see Manzoki back in the green and white stripes.`,
            image: "images/transfer.jpeg" // New image for the transfer window news
        }
    ];

    // Function to render news items into the page
    function renderNews(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = '';
        newsData.forEach(news => {
            html += `
      <article>
        ${news.image ? `<img src="${news.image}" alt="${news.title}" loading="lazy">` : ''}
        <h3>${news.title}</h3>
        <p>${news.content}</p>
      </article>
    `;
        });
        container.innerHTML = html;
    }

    // Render news items onto the page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => renderNews('newsContent'));
    } else {
        renderNews('newsContent');
    }

    renderHistorySlide();
});

// --- Dynamic Featured Players ---
const playersData = [
    { name: "Mutwalibu Mugolofa", position: "GoalKeeper", club: "KCCA FC", image: "images/player1.jpeg" },
    { name: "Allan Okello", position: "Midfielder", club: "VIPERS SC", image: "images/player2.jpeg" },
    { name: "Richard Basangwa", position: "Forward", club: "EXPRESS FC", image: "images/player5.jpeg" },
    { name: "Anold Odongo", position: "Defender", club: "SC Villa", image: "images/player3.jpeg" },
    { name: "Usama Kiza Arafat", position: "Forward", club: "Kampala Capital City Authority FC", image: "images/player4.jpeg" }
];
const playersContent = document.getElementById("playersContent");
playersData.forEach(player => {
    playersContent.innerHTML += `
        <div class="player-card">
            <img src="${player.image}" alt="${player.name}" loading="lazy">
            <h3>${player.name}</h3>
            <p>${player.position}</p>
            <p>Club: ${player.club}</p>
        </div>
    `;
});

// --- Dynamic UPL Teams ---
const uplTeams = [
    { name: "KCCA FC", logo: "images/kcca.png" },
    { name: "SC Villa", logo: "images/scvilla.jpeg" },
    { name: "Express FC", logo: "images/express.jpeg" },
    { name: "Vipers SC", logo: "images/vipers.jpeg" }
];

const teamsContent = document.getElementById("teamsContent");
uplTeams.forEach(team => {
    teamsContent.innerHTML += `
        <div class="team-card">
            <img src="${team.logo}" alt="${team.name} Logo" loading="lazy">
            <h3>${team.name}</h3>
        </div>
    `;
});