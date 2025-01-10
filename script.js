let draggedElement = null;

function allowDrop(event) {
  event.preventDefault(); // Allow dropping by preventing the default behavior
}

function drag(event) {
  draggedElement = event.target.closest(".image"); // Store the dragged element
  event.dataTransfer.setData("text/plain", ""); // Enable drag-and-drop functionality in some browsers
}

function drop(event) {
  event.preventDefault(); // Prevent default handling of the drop event

  const targetElement = event.target.closest(".image"); // The element being dropped onto

  if (draggedElement && targetElement && draggedElement !== targetElement) {
    // Perform the swap operation
    const temp = document.createElement("div"); // Temporary placeholder
    targetElement.replaceWith(temp); // Replace target with temporary element
    draggedElement.replaceWith(targetElement); // Replace dragged with target
    temp.replaceWith(draggedElement); // Replace temporary element with dragged
  }
}

// Add event listeners dynamically
document.querySelectorAll(".image").forEach((element) => {
  element.setAttribute("draggable", "true");
  element.addEventListener("dragstart", drag);
  element.addEventListener("dragover", allowDrop);
  element.addEventListener("drop", drop);
});
