// scripts/formData.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", (e) => {
    // Optional: Perform any custom validation or behavior here.
    console.log("Form submitted with values:");
    console.log("Name:", form.name.value);
    console.log("Email:", form.email.value);
    console.log("Favorite Team:", form.favoriteTeam.value);
    console.log("Comments:", form.comments.value);
    
    // The form is submitted by default (via GET) and data is passed as URL Search Params.
  });
});