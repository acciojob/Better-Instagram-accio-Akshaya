//your code here
document.addEventListener('DOMContentLoaded', () => {
  const draggables = document.querySelectorAll('.draggable');
  let draggedElement = null;

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
      draggedElement = event.target;
      event.dataTransfer.setData('text/plain', null);
      event.target.classList.add('selected');
    });

    draggable.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    draggable.addEventListener('drop', (event) => {
      event.preventDefault();

      if (draggedElement && draggedElement !== event.target) {
        // Swap background images
        const temp = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = event.target.style.backgroundImage;
        event.target.style.backgroundImage = temp;
      }

      draggedElement.classList.remove('selected');
      draggedElement = null;
    });

    draggable.addEventListener('dragend', () => {
      if (draggedElement) {
        draggedElement.classList.remove('selected');
      }
      draggedElement = null;
    });
  });
});
