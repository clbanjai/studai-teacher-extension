console.log("studai currently running")

function checkUrl() {
    const currentUrl = window.location.href; // Get the current URL
  
    // Check if the URL contains "canvas" and ends with "/new" or "/edit"
    const hasCanvas = currentUrl.includes('canvas');
    const endsCorrectly = currentUrl.endsWith('/new') || currentUrl.endsWith('/edit');
  
    return hasCanvas && endsCorrectly;
  }
  
  console.log(checkUrl()); // true or false

if (!checkUrl()) {
    //console.error('This is not a Canvas assignment creation page.');
    return;
  }


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
  // Get the second-to-last child of the target element
  const children = targetElement.children;
  const secondToLastChild = children[children.length - 2];
  
  // Check if there is at least two children
  if (secondToLastChild) {
    // Insert the new element before the second-to-last child
    targetElement.insertBefore(newDiv, secondToLastChild);
  } else {
    // If there are fewer than two children, append to the end
    targetElement.appendChild(newDiv);
  }
} else {
  console.error('Target element not found.');
}
