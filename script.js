function allowDrop(event){
	event.preventDefault();
}

function drag(event){
	event.dataTransfer.setData("text",event.target.id);
}
function drop(event){
	event.preventDefault();
	const data =event.dataTransfer.getData("text");
	const draggable=document.getElementById(data);
	if(event.target.classList.contains("image")){
		event.target.parentNode.insertBefore(draggable,event.target.nextSibling);
	}
	
}