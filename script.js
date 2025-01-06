//your code here
let dragElem = null;
draggables.forEach(draggable =>{
  draggable.addEventListener('dragstart',(event) =>{
	  dragElem=event.target;
	  event.dataTransfer.setData('text/plain',null)
	  event.target.classList('selected');
	  
  });
	draggable.addEventListener('dragover',(event)=>{
		event.preventDefault();
	});
	draggable.addEventListener('drop',(event)=>{
		event.preventDefault();
		if(dragElem && dragElem !== event.target){
			const draggedImage = dragElem.style.backgroundImage;
			dragElem.style.backgroundImage=event.target.style.backgroundImage;
			event.target.style.backgroundImage=draggedImage;
		}
	});
	draggable.addEventListener('drop',(event)=>{
		event.target.classList.remove('selected');
		let dragElem=null;
	});
});


