// content.js

// Create a new div element with your content
const newDiv = document.createElement('div');
newDiv.id = 'studai-canvas-button-2';
newDiv.innerHTML = `
  <div>Estimate Time</div>
`;

// Find the target element by class name
const targetElement = document.querySelector('.assignment-buttons');

// Check if the target element exists before appending
if (targetElement) {
  targetElement.appendChild(newDiv);
} else {
  console.error('Target element not found.');
}

