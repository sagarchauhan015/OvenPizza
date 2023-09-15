function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
}


function onDragOver(event) {
    event.preventDefault();
}

let Index = 10;
function onDrop(event) {
    const id = event.dataTransfer.getData('text');

    const draggableElement = document.getElementById(id);
    draggableElement.style.width = '300px';
    draggableElement.style.height = '300px';
    draggableElement.style.position = 'absolute';
    draggableElement.style.zIndex = Index;
    draggableElement.classList.add('no-dropable');

    const dropzone = event.target;

    if(dropzone.classList.contains('no-dropable') == true){
        dropzone.parentElement.appendChild(draggableElement);
    }
    else{
        dropzone.appendChild(draggableElement);
    }

    Index++;
    event.dataTransfer.clearData();

}