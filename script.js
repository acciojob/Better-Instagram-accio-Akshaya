let draggedElement = null;

    function dragStart(event) {
      draggedElement = event.target.closest('.image-container');
      draggedElement.classList.add('dragging');
    }

    function allowDrop(event) {
      event.preventDefault(); // Necessary to allow dropping
    }

    function drop(event) {
      event.preventDefault();
      const target = event.target.closest('.image-container');
      
      if (target && target !== draggedElement) {
        // Swap inner HTML between dragged and target elements
        const draggedHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = target.innerHTML;
        target.innerHTML = draggedHTML;

        // Remove the dragging class
        draggedElement.classList.remove('dragging');
      }
	}	