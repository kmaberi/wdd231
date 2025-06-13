import { fetchFootballData } from './footballData.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Example: Populate news section (static demo)
    const newsContent = document.getElementById('news-content');
    newsContent.innerHTML = `
        <ul>
            <li>UPL kicks off this weekend with exciting fixtures!</li>
            <li>Grassroots football tournament announced for July.</li>
            <li>Player spotlight: Meet Uganda’s rising star, John Okello.</li>
        </ul>
    `;

    // Fetch football timeline data (local JSON) using async/await inside a try/catch
    try {
        const timelineData = await fetchFootballData('football.json');
        const timelineEl = document.getElementById('timeline');
        // Loop through each decade in the JSON
        Object.entries(timelineData).forEach(([decade, events]) => {
            const section = document.createElement('section');
            const heading = document.createElement('h2');
            heading.textContent = decade;
            section.appendChild(heading);

            const list = document.createElement('ul');
            events.forEach(event => {
                const item = document.createElement('li');
                if (event.year === 2022) {
                    // For 2022 event, only show summary + View More button.
                    item.innerHTML = `
                        <time datetime="${event.year}">${event.year}</time>: 
                        <strong>${event.title}</strong> — ${event.summary} 
                        <em>(${event.reference})</em>
                        <button class="view-more" data-fulltext='${JSON.stringify(event.content)}'>View More</button>
                    `;
                } else {
                    item.innerHTML = `
                        <time datetime="${event.year}">${event.year}</time>: 
                        <strong>${event.title}</strong> — ${event.description} 
                        <em>(${event.reference})</em>
                        ${ event.teamLogo ? `<img src="${event.teamLogo}" alt="${event.title} logo" style="max-width:50px;vertical-align:middle;">` : '' }
                    `;
                }
                list.appendChild(item);
            });
            section.appendChild(list);
            timelineEl.appendChild(section);
        });
    } catch (error) {
        // Handle errors gracefully
        console.error("Error loading timeline data:", error);
    }

    // Additional functionalities (historic updates, article generation, etc.) can be included here...
    
    // Event listener for return modal (for "View More" button)
    document.addEventListener('click', event => {
        if (event.target.matches('.view-more')) {
            const fullText = JSON.parse(event.target.getAttribute('data-fulltext'));
            const modal = document.getElementById('modal');
            const modalMessage = document.getElementById('modal-message');
            modalMessage.textContent = fullText;
            modal.style.display = 'block';
        }
    });

    // Modal close functionality
    document.getElementById('modal-close').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
    });
});

// Dynamic Footer Info: Date, Time, and Weather
const footer = document.querySelector('footer');
if (footer) {
    const footerInfo = document.createElement('div');
    footerInfo.classList.add('footer-info');
    
    function updateFooter() {
        const now = new Date();
        footerInfo.innerHTML = `
            <p>&copy; ${now.getFullYear()} Ugandan Football</p>
            <p>Last Modified: ${document.lastModified}</p>
            <p>Current Time: ${now.toLocaleTimeString()}</p>
            <p>Weather: Kampala: 27°C, Partly Cloudy</p>
        `;
    }
    
    updateFooter();
    setInterval(updateFooter, 1000);
    footer.appendChild(footerInfo);
}

console.log("JS loaded!");