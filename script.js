let dragSrc = null;

function handleDragStart(e) {
  dragSrc = this;
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary to allow drop.
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  // Swap background images
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  if (dragSrc != this) {
    const temp = this.style.backgroundImage;
    this.style.backgroundImage = dragSrc.style.backgroundImage;
    dragSrc.style.backgroundImage = temp;
  }
  return false;
}

let images = document.querySelectorAll('.image');
images.forEach(function(img) {
  img.addEventListener('dragstart', handleDragStart, false);
  img.addEventListener('dragover', handleDragOver, false);
  img.addEventListener('drop', handleDrop, false);
});
