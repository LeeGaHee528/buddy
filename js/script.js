// Select all letters
const letters = document.querySelectorAll('.adopt_wrap');

// Initialize index
let currentIndex = 0;

// Function to update the active letter
function updateActiveLetter() {
  // Remove 'active' class from all letters
  letters.forEach(letter => letter.classList.remove('active'));

  // Add 'active' class to the current letter
  letters[currentIndex].classList.add('active');

  // Move to the next index, wrapping back to 0 if necessary
  currentIndex = (currentIndex + 1) % letters.length;
}

// Call the function every 500ms
setInterval(updateActiveLetter, 2000);
