// Select the parent container and all draggable elements
const container = document.getElementById('parent');
const draggableElements = document.querySelectorAll('.image');

// Add drag and drop event listeners
draggableElements.forEach((element) => {
  element.addEventListener('dragstart', (event) => {
    // Store the ID of the dragged element
    event.dataTransfer.setData('text/plain', event.target.id);

    // Add a class to visually indicate dragging
    event.target.classList.add('selected');
  });

  element.addEventListener('dragend', (event) => {
    // Remove the visual indicator class
    event.target.classList.remove('selected');
  });

  element.addEventListener('dragover', (event) => {
    // Allow the drop by preventing the default behavior
    event.preventDefault();

    // Add a hover effect
    event.target.classList.add('hover');
  });

  element.addEventListener('dragleave', (event) => {
    // Remove the hover effect
    event.target.classList.remove('hover');
  });

  element.addEventListener('drop', (event) => {
    // Prevent default behavior
    event.preventDefault();

    // Remove the hover effect
    event.target.classList.remove('hover');

    // Get the ID of the dragged element
    const draggedId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);

    // Get the target element
    const targetElement = event.target;

    // Ensure both elements exist and are not the same
    if (draggedElement && draggedElement !== targetElement) {
      // Swap the positions of the dragged and target elements
      const draggedSibling =
        draggedElement.nextElementSibling === targetElement
          ? draggedElement
          : draggedElement.nextElementSibling;

      container.insertBefore(draggedElement, targetElement.nextSibling);
      container.insertBefore(targetElement, draggedSibling);
    }
  });
});
