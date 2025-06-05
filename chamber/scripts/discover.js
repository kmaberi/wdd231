document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display cards
    fetch('data/discover.json')
        .then(res => res.json())
        .then(items => {
            const grid = document.getElementById('discover-cards');
            grid.innerHTML += items.map(item => `
                <article class="discover-card">
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="images/${item.image}" alt="${item.name}" loading="lazy">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button>Learn More</button>
                </article>
            `).join('');
        });

    // Last visit message
    const sidebar = document.createElement('aside');
    sidebar.className = 'visit-message';
    document.body.insertBefore(sidebar, document.body.firstChild);

    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    let message = '';

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const days = Math.floor((now - Number(lastVisit)) / MS_PER_DAY);
        if (days < 1) {
            message = "Back so soon! Awesome!";
        } else if (days === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${days} days ago.`;
        }
    }
    sidebar.textContent = message;
    localStorage.setItem('lastVisit', now);
});