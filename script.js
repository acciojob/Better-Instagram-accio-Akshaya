let draggedElement = null;

    function dragStart(event) {
      draggedElement = event.target.closest('.image');
      draggedElement.classList.add('dragging');
    }

    function allowDrop(event) {
      event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();
      const target = event.target.closest('.image');

      if (target && target !== draggedElement) {
        // Swap the inner HTML of the dragged and target elements
        const draggedHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = target.innerHTML;
        target.innerHTML = draggedHTML;

        draggedElement.classList.remove('dragging');
      }
    }