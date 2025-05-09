const courses = [
  { name: "WDD 130", subject: "wdd", credits: 3, completed: true },
  { name: "WDD 230", subject: "wdd", credits: 3, completed: false },
  { name: "CSE 121b", subject: "cse", credits: 3, completed: true },
  { name: "CSE 111", subject: "cse", credits: 3, completed: false },
];

const courseList = document.getElementById("course-list");
const creditTotal = document.getElementById("credit-total");

function displayCourses(filter = "all") {
  courseList.innerHTML = "";
  let totalCredits = 0;

  courses
    .filter(course => filter === "all" || course.subject === filter)
    .forEach(course => {
      const li = document.createElement("li");
      li.textContent = `${course.name} (${course.credits} credits)`;
      li.style.color = course.completed ? "green" : "red";
      courseList.appendChild(li);
      totalCredits += course.credits;
    });

  creditTotal.textContent = totalCredits;
}

document.getElementById("filter-controls").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    displayCourses(e.target.dataset.subject);
  }
});

displayCourses();