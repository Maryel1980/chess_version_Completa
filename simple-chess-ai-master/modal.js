let openModal = document.getElementById('openModal');
let modalGanador= document.getElementById('modal');
let closeModal= document.getElementById('close');

openModal.onclick= function(){
    modalGanador.style.visibility="visible";
}

//cerrar modal

closeModal.onclick= function(){
    modalGanador.style.visibility="hidden";
}

modalGanador.onclick=function(){
    modalGanador.style.visibility="hidden";
}