// content.js

// Create a new div element with your content
const newDiv = document.createElement('div');
newDiv.id = 'studai-canvas-button';
newDiv.innerHTML = `
  <p>Estimate Time</p>
`;

// Find the target element by class name
const targetElement = document.querySelector('.assignment-buttons');

// Check if the target element exists before appending
if (targetElement) {
  targetElement.appendChild(newDiv);
} else {
  console.error('Target element not found.');
}
