const spotlightContainer = document.querySelector('.spotlight-container');

// Fetch member data
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Path to your JSON file
        const members = await response.json();

        displaySpotlights(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
        spotlightContainer.innerHTML = '<p>Unable to load member data.</p>';
    }
}

// Display spotlights
function displaySpotlights(members) {
    // Filter for gold and silver members
    const eligibleMembers = members.filter(member => member.level === 2 || member.level === 3);

    // Randomly select 2 or 3 members
    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = selectedMembers.map(member => `
        <div class="spotlight-card">
            <img src="images/${member.image}" alt="${member.name}" class="spotlight-image">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Membership Level:</strong> ${getMembershipLevel(member.level)}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        </div>
    `).join('');
}

// Get membership level as a string
function getMembershipLevel(level) {
    switch (level) {
        case 2: return 'Silver Member';
        case 3: return 'Gold Member';
        default: return 'Member';
    }
}

// Initialize
fetchMembers();