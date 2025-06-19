// Array of 15 dynamic items, each with 5 properties (id, name, category, price, img)
const items = [
    { id: 1, name: "Soccer Ball", category: "Equipment", price: "$15", img: "images/ball.jpeg" },
    { id: 2, name: "Shin Guards", category: "Equipment", price: "$10", img: "images/shins.webp" },
    { id: 3, name: "Football Boots", category: "Equipment", price: "$50", img: "images/boots.jpeg" },
    { id: 4, name: "Team Jersey", category: "Apparel", price: "$30", img: "images/jersey.jpeg" },
    { id: 5, name: "Captain's Armband", category: "Accessories", price: "$8", img: "images/captain.jpeg" },
    { id: 6, name: "Goalkeeper Gloves", category: "Equipment", price: "$25", img: "images/gk.jpeg" },
    { id: 7, name: "Training Cones", category: "Equipment", price: "$12", img: "images/training_cones.jpeg" },
    { id: 8, name: "Water Bottle", category: "Accessories", price: "$5", img: "images/bottle.jpeg" },
    { id: 9, name: "Sweatband", category: "Accessories", price: "$3", img: "images/sweatband.jpeg" },
    { id: 10, name: "Sports Watch", category: "Accessories", price: "$40", img: "images/watch.jpeg" },
    { id: 11, name: "Match Shorts", category: "Apparel", price: "$20", img: "images/shorts.jpeg" },
    { id: 12, name: "Headband", category: "Apparel", price: "$4", img: "images/bands.jpeg" },
    { id: 13, name: "Training Vest", category: "Apparel", price: "$18", img: "images/vest.webp" },
    { id: 14, name: "Fitness Tracker", category: "Electronics", price: "$45", img: "images/fitness_traker.jpeg" },
    { id: 15, name: "Team Socks", category: "Apparel", price: "$7", img: "images/socks.jpeg" }
];

// Select the container where the dynamic items will be displayed.
const displayContainer = document.getElementById("dataDisplay");

// Loop over the items array and create a card for each item.
items.forEach(item => {
    // Create a container div for the item.
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    // Set inner HTML using template literals to include an image.
    itemDiv.innerHTML = `
    <img src="${item.img}" alt="${item.name}" class="item-img">
    <h3>${item.name}</h3>
    <p><strong>ID:</strong> ${item.id}</p>
    <p><strong>Category:</strong> ${item.category}</p>
    <p><strong>Price:</strong> ${item.price}</p>
  `;

    // Append the item card to the display container.
    displayContainer.appendChild(itemDiv);
});