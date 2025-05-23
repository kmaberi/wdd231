const messages = [
    "📢 Scholarship applications are now open! Apply by June 30th.",
    "🎉 Join us for the Business Growth Seminar on July 15th.",
    "🤝 Networking event this Friday at the Sunrise Valley Community Center.",
    "💡 Small Business Grants available! Deadline: August 10th.",
    "✨ Don't miss the Annual Chamber Gala on September 20th.",
    "📅 Check out our upcoming workshops and training sessions!",
    "🌟 Become a member today and enjoy exclusive benefits!"
];

const updatesContainer = document.getElementById('updates-container');

// Function to display messages
function displayMessages() {
    messages.forEach((message, index) => {
        const messageItem = document.createElement('div');
        messageItem.classList.add('update-item');
        if (index === 0) messageItem.classList.add('active'); // Show the first message initially
        messageItem.textContent = message;
        updatesContainer.appendChild(messageItem);
    });
}

// Function to rotate messages
function rotateMessages() {
    const items = document.querySelectorAll('.update-item');
    let currentIndex = 0;

    setInterval(() => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }, 4000); // Rotate every 4 seconds
}

// Initialize
displayMessages();
rotateMessages();