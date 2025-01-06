// Variables to track the drag source and target
let dragSource = null;

// Add drag event listeners to all div elements
document.querySelectorAll('.draggable').forEach((element) => {
  // When dragging starts
  element.addEventListener('dragstart', (event) => {
    dragSource = event.target; // Set the drag source
    event.dataTransfer.effectAllowed = 'move'; // Indicate the move operation
  });

  // When dragging over a valid drop target
  element.addEventListener('dragover', (event) => {
    event.preventDefault(); // Allow the drop
    event.dataTransfer.dropEffect = 'move'; // Indicate the move operation
  });

  // When the element is dropped
  element.addEventListener('drop', (event) => {
    event.preventDefault(); // Prevent default behavior

    // Swap the background images between the drag source and drop target
    if (dragSource && dragSource !== event.target) {
      const temp = dragSource.style.backgroundImage;
      dragSource.style.backgroundImage = event.target.style.backgroundImage;
      event.target.style.backgroundImage = temp;
    }
  });
});
