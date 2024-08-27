/*const input = document.getElementById("input__1");*/
const textArea = document.querySelector(".encriptador__ingresoContenido__input__1");
const mensaje = document.querySelector(".encriptador__salidaContenido__input__1");
const inside1 = document.querySelector(".encriptador__salidaContenido__inside1");
const linebrake = document.getElementById('mensaje__no__encontrado');
const linebrake2 = document.getElementById('encriptar__o__desencriptar');
const strong = linebrake.querySelector('strong'); //seleccion dentro del strong
const inside2 = document.querySelector(".encriptador__salidaContenido__inside2");
const buttonEncriptar = document.querySelector(".encriptador__ingresoContenido__botones__1");
const buttonCopiar = document.querySelector(".encriptador__salidaContenido__botones__1");
const palabra = 'fue';
const palabra2 = 'desees'
const posicion = strong.textContent.indexOf(palabra);
const posicion2 = linebrake2.textContent.indexOf(palabra2);
const espacio = document.createTextNode('                           ');



strong.insertBefore(espacio, strong.childNodes[posicion + palabra.length]);
linebrake2.textContent = linebrake2.textContent.substring(0, posicion2 + palabra2.length) + '                                              ' + linebrake2.textContent.substring(posicion2 + palabra2.length);

/*input.addEventListener("focus", () => {
    input.setSelectionRange(0, 0);
});*/


/* 

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 

*/

let elementosVisibles = true;

buttonCopiar.style.display = "none";


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

    buttonEncriptar.addEventListener("click", function() {

        if (textArea.value.trim() === "") {
            mensaje.style.backgroundImage = "none";
            inside1.style.display = "none";
            inside2.style.display = "none";
            buttonCopiar.style.display = "block";

            elementosVisibles = false;
        } 
        
        if (mensaje.value.trim() === "") {
            mensaje.style.backgroundImage = "url('/assets/Lupa.png')";
            inside1.style.display = "block";
            inside2.style.display = "block";
            buttonCopiar.style.display = "none";
            mensaje.value = '';

            elementosVisibles = true;
        };

    });

};





function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada
}



function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


function copiarTexto(){
    const areaCopiado = document.getElementById("resultadoEncriptacion");

    const textoQueSeraCopiado = areaCopiado.value;

    navigator.clipboard.writeText(textoQueSeraCopiado)

        .then(() => {
            alert("¡El texto ha sido copiado exitosamente en el portapapeles!");
        })

        .catch(err => {
            console.error("Ha habido un error al copiar: ", err);
        });
}

const btnCopiar = document.getElementById("copiar");
btnCopiar.addEventListener("click", copiarTexto);

 if (window.innerWidth < 768) {
    buttonEncriptar.addEventListener('click', () => {
      // Verifica si hay información para encriptar
      if (textArea.value.trim() === "") {
        // Muestra la imagen
        mensaje.style.backgroundImage = 'none';
      } else {
        // Oculta la imagen
        mensaje.style.backgroundImage = 'none';
      }
    });
  };






