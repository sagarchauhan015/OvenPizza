function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);

    // event.currentTarget.style.width = '300px';
    // event.currentTarget.style.height = '300px';


}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');

    const draggableElement = document.getElementById(id);
    draggableElement.style.width = '300px';
    draggableElement.style.height = '300px';

    const dropzone = event.target;
    dropzone.appendChild(draggableElement);

    event
    .dataTransfer
    .clearData();

}