var imagenes = ['img/imagen1.png','img/imagen2.png','img/imagen3.png'];
aux = 0;
function cambiar(cuadro){
  cuadro.addEventListener('click',e=>{
    let atras = cuadro.querySelector('.atras'),
    adelante = cuadro.querySelector('.adelante'),
    img = cuadro.querySelector('img'),
    targt = e.target;
    if(targt==atras){
      if(aux>0){
        img.src=imagenes[aux -1];
        aux--;
      }else{
        img.src=imagenes[imagenes.length -1];
        aux = imagenes.length -1;
      }
    }else if(targt == adelante){
      if(aux<imagenes.length - 1){
        img.src=imagenes[aux +1];
        aux++;
      }else{
        img.src=imagenes[0];
        aux = 0;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  let cuadro = document.querySelector('.cuadro');
  cambiar(cuadro);
})