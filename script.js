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
        
        const draggedHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = target.innerHTML;
        target.innerHTML = draggedHTML;

        draggedElement.classList.remove('dragging');
      }
    }