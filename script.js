// Track demo usage
let demoCount = 0;

// Calculate animation scale
function calculateScale(base, factor) {
  return base * factor;
}

// Animate demo box
function startDemo() {
  const box = document.getElementById("demoBox");
  box.classList.remove("animate");
  void box.offsetWidth;
  box.classList.add("animate");

  const scale = calculateScale(1, 1.5);
  console.log(`Demo scale factor: ${scale}`);
  demoCount++;
  console.log(`Demo started ${demoCount} times`);
}

// Flip course card
function flipCourseCard() {
  const card = document.getElementById("courseCard");
  card.classList.toggle("flipped");
}

// Toggle modal
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}

// Attach events
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("demoBtn").addEventListener("click", startDemo);
  document.getElementById("courseCard").addEventListener("click", flipCourseCard);
  document.getElementById("enrollBtn").addEventListener("click", toggleModal);
  document.getElementById("closeModalBtn").addEventListener("click", toggleModal);
});

// Toggle modal
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}

// Form validation and submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;

  // Basic validation
  if (!name || !email || !phone || !course) {
    alert("Please fill out all fields.");
    return;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const phonePattern = /^\d{10,}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number (at least 10 digits).");
    return;
  }

  // Simulate submission
  alert(`Thank you, ${name}! You've enrolled in the ${course} course.`);
  document.getElementById("enrollForm").reset();
  toggleModal();
}

// Attach events
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("demoBtn").addEventListener("click", startDemo);
  document.getElementById("courseCard").addEventListener("click", flipCourseCard);
  document.getElementById("enrollBtn").addEventListener("click", toggleModal);
  document.getElementById("closeModalBtn").addEventListener("click", toggleModal);
  document.getElementById("enrollForm").addEventListener("submit", handleFormSubmit);
});