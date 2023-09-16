let Index = 10;
let isFinished = false;

function abort(){
    location.reload();
}

function baking(){
    if(isFinished === true){
        document.querySelector(".op-holder-wrapper").classList.add('rotating');
    }
}

function checkAndChange(draggableElement){
    const layerArray = document.querySelector('.op-holder-wrapper').children;

    if(draggableElement.classList.contains('bases')){
        document.getElementById('instruct').innerHTML = 'Now add as many as toppings you want';
    }

    for(let i=0; i<layerArray.length; i++){
        console.log(layerArray);
        if(layerArray[i].classList.contains('toppings')){
            isFinished = true;
            document.getElementById('finish-btn').removeAttribute('disabled');
        }
    }
}

function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
}


function onDragOver(event) {
    event.preventDefault();
}


function onDrop(event) {
    const id = event.dataTransfer.getData('text');

    const draggableElement = document.getElementById(id).cloneNode();
    draggableElement.style.width = '300px';
    draggableElement.style.height = '300px';
    draggableElement.style.position = 'absolute';
    draggableElement.style.zIndex = Index;
    draggableElement.classList.add('no-dropable');

    const dropzone = event.target;

    if(draggableElement.classList.contains('toppings') && dropzone.classList.contains('empty')){
        alert("Please Don't Waste Toppings 🙂 \nSelect the pizza base first and then add toppings");
    }
    else{
        if((dropzone.classList.contains('bases') && draggableElement.classList.contains('bases')) || dropzone.classList.contains('toppings') && draggableElement.classList.contains('bases')){
            alert("You can't add a base over another base.")
            event.preventDefault();
        }
        else{
            if(dropzone.classList.contains('no-dropable') == true){
                dropzone.parentElement.appendChild(draggableElement);
            }
            else{
                dropzone.appendChild(draggableElement);
            }
            Index++;
        }
    }

    checkAndChange(draggableElement);
    event.dataTransfer.clearData();

}
