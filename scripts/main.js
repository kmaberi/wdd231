const courses = [
  { name: "WDD 130", subject: "wdd", credits: 3, completed: true },
  { name: "WDD 230", subject: "wdd", credits: 3, completed: false },
  { name: "CSE 121b", subject: "cse", credits: 3, completed: true },
  { name: "CSE 111", subject: "cse", credits: 3, completed: false },
];

const listEl = document.getElementById("course-list");
const totalEl = document.getElementById("credit-total");
const yearEl  = document.getElementById("year");
const modEl   = document.getElementById("last-modified");
const creditTotal = document.getElementById("credit-total");

courses.forEach(course => {
  const li = document.createElement("li");
  li.textContent = `${course.name} (${course.credits} credits)`;
  li.classList.add(course.completed ? "completed" : "incomplete");
  listEl.appendChild(li);
});

// 1. Render courses
function renderCourses(filter = "all") {
  listEl.innerHTML = "";
  const filtered = courses.filter(c =>
    filter === "all" ? true : c.subject === filter
  );
  filtered.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.name} (${c.credits} credits)`;
    if (c.completed) li.classList.add("completed");
    listEl.appendChild(li);
  });
  // 2. Update credits total via reduce
  const total = filtered.reduce((sum, c) => sum + c.credits, 0);
  totalEl.textContent = total;
}

function updateCredits(filter = "all") {
  const filteredCourses = courses.filter(course => filter === "all" || course.subject === filter);
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  creditTotal.textContent = totalCredits;
}

// 3. Filter buttons
document.getElementById("filter-controls").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const filter = e.target.dataset.subject;
    const filteredCourses = courses.filter(course => filter === "all" || course.subject === filter);
    listEl.innerHTML = "";
    filteredCourses.forEach(course => {
      const li = document.createElement("li");
      li.textContent = `${course.name} (${course.credits} credits)`;
      li.classList.add(course.completed ? "completed" : "incomplete");
      listEl.appendChild(li);
    });
  }
});

// 4. Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// Initial render
renderCourses();
updateCredits();
