// Global variable
let animationCount = 0;

// Part 2: Reusable function with parameter + return value
function updateCount(increment) {
  animationCount += increment;
  return animationCount;
}

// Animate the box when button is clicked
document.getElementById("magicBtn").addEventListener("click", () => {
  const box = document.getElementById("animatedBox");
  box.classList.toggle("animate");

  // Using function with return value
  let total = updateCount(1);
  console.log(`Animation triggered ${total} times`);
});

// Modal functionality
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
