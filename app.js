//constantes, arreglos y variables necesarias

const slider = document.querySelector("#slider");
const imagenes_slider = ["imagenes/_DSC3058-Editar.jpg",
        "imagenes/KarinaUriarte-46.jpg", "imagenes/KarinaUriarte-30.JPG",
        "imagenes/KarinaUriarte-47.jpg"]
const arreglo_circulos = document.getElementsByClassName("circulo")
var indice = 1
let color='#9c6644'

//el primer circulito del slider pintado en rosa
arreglo_circulos[0].style.backgroundColor = color

// este setInterval es para hacer funcional el slider


function cambiar_imagen(){

    if(indice == imagenes_slider.length) indice = 0

    for(let i=0; i<4; i++){
        arreglo_circulos[i].style.backgroundColor = "black"

        if(indice == 0 && arreglo_circulos[i].id == "uno") 
            arreglo_circulos[i].style.backgroundColor = color
        
        else if(indice == 1 && arreglo_circulos[i].id == "dos")
            arreglo_circulos[i].style.backgroundColor = color
        
        else if(indice == 2 && arreglo_circulos[i].id == "tres") 
            arreglo_circulos[i].style.backgroundColor = color
        
        else if(indice == 3 && arreglo_circulos[i].id == "cuatro") 
            arreglo_circulos[i].style.backgroundColor = color
    }
    slider.style.backgroundImage = "url("+imagenes_slider[indice]+")"
    indice++;


}


var contador = setInterval(
cambiar_imagen, 5000)

for(var i=0; i<4; i++){
    arreglo_circulos[i].onclick = function(){

        if(this.id == "uno") indice = 0
        else if(this.id == "dos") indice = 1
        else if(this.id == "tres") indice = 2
        else indice = 3
        clearTimeout(contador)
        cambiar_imagen()
        contador = setInterval(cambiar_imagen,5000)
    }
}



document.querySelector("#galeria").onclick = function(){
    document.querySelector("#home_page").style.display = "none";
    document.querySelector("#galeria_page").style.display = "block";
    document.querySelector("#cursos_page").style.display = "none";

    
    document.getElementById('home').classList.remove('actual');
    document.getElementById('galeria').classList.add('actual');
    document.getElementById('cursos').classList.remove('actual');
    document.getElementById('contacto').classList.remove('actual');

}


document.querySelector("#cursos").onclick = function(){
    document.querySelector("#home_page").style.display = "none";
    document.querySelector("#galeria_page").style.display = "none";
    document.querySelector("#cursos_page").style.display = "block";

    document.getElementById('home').classList.remove('actual');
    document.getElementById('galeria').classList.remove('actual');
    document.getElementById('cursos').classList.add('actual');
    document.getElementById('contacto').classList.remove('actual');


}

document.querySelector("#home").onclick = function(){
    document.querySelector("#home_page").style.display = "block";
    document.querySelector("#galeria_page").style.display = "none";
    document.querySelector("#cursos_page").style.display = "none";

    document.getElementById('home').classList.add('actual');
    document.getElementById('galeria').classList.remove('actual');
    document.getElementById('cursos').classList.remove('actual');
    document.getElementById('contacto').classList.remove('actual');


}
