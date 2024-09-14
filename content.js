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
  // Get the last child of the target element
  const lastChild = targetElement.lastElementChild;
  
  // Insert the new element before the last child
  targetElement.insertBefore(newDiv, lastChild);
} else {
  console.error('Target element not found.');
}
