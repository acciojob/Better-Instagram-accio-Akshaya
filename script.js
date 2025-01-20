var dragElements = document.querySelectorAll('.drag');
for(var i = 0; i < dragElements.length; i++) {
    dragElements[i].setAttribute('draggable', 'true');
}
for(var i = 0; i < dragElements.length; i++) {
    dragElements[i].addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    });

    dragElements[i].addEventListener('dragend', function(event) {
        // You can add code here to do something when the drag ends if you want
    });
}
var container = document.querySelector('.container');
container.addEventListener('dragover', function(event) {
    event.preventDefault(); // This is necessary to allow a drop
});

container.addEventListener('drop', function(event) {
    event.preventDefault(); // This is necessary to allow a drop

    var draggedElementId = event.dataTransfer.getData('text/plain');
    var draggedElement = document.getElementById(draggedElementId);

    var dropTarget = event.target;
    var temp = document.createElement('div');
    
    container.insertBefore(temp, draggedElement);
    container.insertBefore(draggedElement, dropTarget);
    container.insertBefore(dropTarget, temp);
    container.removeChild(temp);
});