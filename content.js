// content.js

// Create a new div element with your content
const newDiv = document.createElement('div');
newDiv.id = 'my-extension-div';
newDiv.innerHTML = `
  <h1>Hello from My Extension</h1>
  <p>This is some injected HTML content.</p>
`;

// Find the target element by class name
const targetElement = document.querySelector('.assignment-buttons');

// Check if the target element exists before appending
if (targetElement) {
  targetElement.appendChild(newDiv);
} else {
  console.error('Target element not found.');
}
