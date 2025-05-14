document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // Fetch and display members
    async function fetchAndDisplayMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members, 'grid');
        } catch (error) {
            console.error('Error fetching members:', error);
            membersContainer.innerHTML = '<p>Error loading member data.</p>';
        }
    }

    // Display members in the specified layout
    function displayMembers(members, layout) {
        membersContainer.className = `directory ${layout}`;
        membersContainer.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}" class="member-image">
                <h3>${member.name}</h3>
                <p class="level">${getMembershipLevel(member.level)}</p>
                <p class="address">${member.address}</p>
                <p class="phone">${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="description">${member.description}</p>
                <p class="founded">Founded: ${member.founded}</p>
            </div>
        `).join('');
    }

    // Get membership level as a string
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver Member';
            case 3: return 'Gold Member';
            default: return 'Member';
        }
    }

    // Toggle between grid and list views
    gridViewButton.addEventListener('click', () => {
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
        fetchAndDisplayMembers(); // Re-render in grid view
    });

    listViewButton.addEventListener('click', () => {
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
        fetchAndDisplayMembers(); // Re-render in list view
        membersContainer.className = 'directory list';
    });

    // Initial fetch and display
    fetchAndDisplayMembers();
});