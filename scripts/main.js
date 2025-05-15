document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 1, name: "Web Frontend Development I", subject: "Web Development", credits: 3, image: "web-frontend.jpg", completed: false },
        { id: 2, name: "Database Design", subject: "Database", credits: 3, image: "database-design.jpg", completed: false },
        { id: 3, name: "JavaScript Programming", subject: "Programming", credits: 4, image: "javascript-programming.jpg", completed: false },
        { id: 4, name: "Responsive Design", subject: "Web Development", credits: 2, image: "responsive-design.jpg", completed: false },
        { id: 5, name: "Data Structures", subject: "Programming", credits: 3, image: "data-structures.jpg", completed: false },
        { id: 6, name: "Cloud Computing", subject: "Cloud", credits: 3, image: "cloud-computing.jpg", completed: false }
    ];

    const courseList = document.getElementById('course-list');
    const filterButtons = document.querySelectorAll('.filter-button');
    const totalCreditsElement = document.getElementById('total-credits');

    // Display courses dynamically
    function displayCourses(filteredCourses) {
        courseList.innerHTML = filteredCourses.map(course => `
            <div class="course-card">
                <img src="images/${course.image}" alt="${course.name}" class="course-image">
                <h3>${course.name}</h3>
                <p>${course.subject} - ${course.credits} credits</p>
            </div>
        `).join('');
    }

    // Calculate total credits
    function calculateTotalCredits(filteredCourses) {
        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
    }

    // Filter courses by subject
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const subject = button.dataset.subject;
            const filteredCourses = subject === 'All' ? courses : courses.filter(course => course.subject === subject);
            displayCourses(filteredCourses);
            calculateTotalCredits(filteredCourses);
        });
    });

    // Initial display
    displayCourses(courses);
    calculateTotalCredits(courses);
});
