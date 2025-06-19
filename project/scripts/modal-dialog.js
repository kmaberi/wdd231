document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const closeBtn = document.querySelector(".modal .close");

  // Optional: If you want a trigger to open the modal,
  // add a button with id "openModalBtn" in your HTML.
  const openModalBtn = document.getElementById("openModalBtn");
  if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }

  // When the user clicks on <span> (x), close the modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});