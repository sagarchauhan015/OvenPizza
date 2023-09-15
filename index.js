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

    const dropzone = event.target;
    dropzone.appendChild(draggableElement);

    Index++;
    event.dataTransfer.clearData();

}