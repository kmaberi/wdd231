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
        // Fetch the JSON data (ensure the path is correct relative to your HTML file)
        const response = await fetch('data/football.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const timelineData = await response.json();

        // Flatten the timeline events from all decades into a single array
        let timelineItems = [];
        Object.entries(timelineData).forEach(([decade, events]) => {
            events.forEach(event => {
                timelineItems.push({ decade, ...event });
            });
        });

        // Optionally sort events by year (assuming numeric year)
        timelineItems.sort((a, b) => a.year - b.year);

        // Get the timeline element and create a container for the slideshow
        const timelineEl = document.getElementById('timeline');
        timelineEl.innerHTML = ''; // Clear any existing content
        const slideContainer = document.createElement('div');
        slideContainer.id = 'timeline-slide-container';
        timelineEl.appendChild(slideContainer);

        let currentIndex = 0;
        function displaySlide(index) {
            const event = timelineItems[index];
            slideContainer.innerHTML = `
                <div class="slide">
                    <time datetime="${event.year}">${event.year}</time>: 
                    <strong>${event.title}</strong> — ${event.description} 
                    <em>(${event.reference})</em>
                    ${ event.teamLogo ? `<img src="${event.teamLogo}" alt="${event.title} logo" style="max-width:50px;vertical-align:middle;">` : '' }
                </div>
            `;
        }

        // Display the first slide
        displaySlide(currentIndex);

        // Change slide every 6 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % timelineItems.length;
            displaySlide(currentIndex);
        }, 6000);

    } catch (error) {
        console.error("Failed to load timeline data:", error);
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

    // Sample Transfer Data (with "image" property added)
    const transferData = [
      {
        "player": "Cesar Manzoki",
        "fromClub": "Free Agent",
        "toClub": "Vipers SC",
        "transferType": "Permanent",
        "fee": "Undisclosed",
        "date": "2025-06-10",
        "image": "images/cesar.jpg"
      },
      {
        "player": "Brian Nsereko",
        "fromClub": "SC Villa",
        "toClub": "Express FC",
        "transferType": "Loan",
        "fee": "$10,000",
        "date": "2025-06-12",
        "image": "images/brian.jpg"
      },
      {
        "player": "George Aladi",
        "fromClub": "KCCA FC",
        "toClub": "Bright Stars FC",
        "transferType": "Permanent",
        "fee": "$25,000",
        "date": "2025-06-08",
        "image": "images/george.jpg"
      },
      {
        "player": "Michael Sserumaga",
        "fromClub": "Bright Stars FC",
        "toClub": "KCCA FC",
        "transferType": "Permanent",
        "fee": "$15,000",
        "date": "2025-06-11",
        "image": "images/michael.jpg"
      },
      {
        "player": "Moses Waiswa",
        "fromClub": "Vipers SC",
        "toClub": "SC Villa",
        "transferType": "Loan",
        "fee": "$8,000",
        "date": "2025-06-13",
        "image": "images/moses.jpg"
      }
    ];

    let currentTransferIndex = 0;

    function showTransfer(index) {
      const transfer = transferData[index];
      const transferContainer = document.getElementById("transfer-list");
      
      // Build the HTML for the current transfer
      transferContainer.innerHTML = `
        <div class="transfer-slide" style="display: flex; align-items: center; padding: 10px; border: 1px solid var(--color-primary); border-radius: 5px; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <img src="${transfer.image}" alt="${transfer.player}" class="transfer-img" style="max-width:80px; margin-right: 10px; border-radius: 50%;">
          <div class="transfer-details" style="font-size: 0.95rem;">
            <strong>${transfer.player}</strong> transferred from 
            <em>${transfer.fromClub}</em> to 
            <em>${transfer.toClub}</em> via 
            <strong>${transfer.transferType}</strong> for 
            <strong>${transfer.fee}</strong> on 
            <time datetime="${transfer.date}">${transfer.date}</time>.
          </div>
        </div>
      `;
    }
    
    // Display the first transfer
    showTransfer(currentTransferIndex);
    
    // Automatically change transfers every 6 seconds
    setInterval(() => {
      currentTransferIndex = (currentTransferIndex + 1) % transferData.length;
      showTransfer(currentTransferIndex);
    }, 6000);

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

    // Sample News Data (each with an image)
    const newsData = [
      {
        headline: "Premier League Kicks Off",
        detail: "The Ugandan Premier League season begins with exciting match-ups!",
        image: "images/news1.jpg"
      },
      {
        headline: "New Sponsorship Deal",
        detail: "A major sponsor signs a multi-year deal with Vipers SC.",
        image: "images/news2.jpg"
      },
      {
        headline: "Stadium Renovation Completed",
        detail: "The revamped SC Villa Stadium is now open and ready for matches.",
        image: "images/news3.jpg"
      }
    ];

    let currentNewsIndex = 0;

    function showNews(index) {
      const newsItem = newsData[index];
      const newsContainer = document.getElementById("news-content");
      
      newsContainer.innerHTML = `
        <div class="news-slide" style="display: flex; align-items: center; padding: 10px; border: 1px solid var(--color-primary); border-radius: 5px; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <img src="${newsItem.image}" alt="${newsItem.headline}" class="news-img" style="max-width:80px; margin-right: 10px; border-radius: 5px;">
          <div class="news-details">
            <h3 style="margin: 0 0 5px;">${newsItem.headline}</h3>
            <p style="margin: 0;">${newsItem.detail}</p>
          </div>
        </div>
      `;
    }

    // Display the first news item and then update every 6 seconds
    showNews(currentNewsIndex);
    setInterval(() => {
      currentNewsIndex = (currentNewsIndex + 1) % newsData.length;
      showNews(currentNewsIndex);
    }, 6000);

});

console.log("JS loaded!");

<section id="news">
  <h2>Latest News</h2>
  <div id="news-content"></div>
</section>