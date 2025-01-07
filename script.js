let draggedElement = null;

function allowDrop(event) {
  event.preventDefault(); // Allow dropping
}

function drag(event) {
  draggedElement = event.target.closest(".image"); // Store the dragged element
}

function drop(event) {
  event.preventDefault();

  const targetElement = event.target.closest(".image"); // The element being dropped onto

  if (draggedElement && targetElement && draggedElement !== targetElement) {
    const temp = document.createElement("div"); // Temporary element for swapping
    targetElement.replaceWith(temp); // Replace target with temp
    draggedElement.replaceWith(targetElement); // Replace dragged with target
    temp.replaceWith(draggedElement); // Replace temp with dragged
  }
}
