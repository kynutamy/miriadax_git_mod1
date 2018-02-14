/**
 * Añade los eventos al cargar la pagina
 */
window.onload = function(){
    document.getElementById("bt-cube").addEventListener("click",function(event){pow(3);})
    document.getElementById("bt-cuarta").addEventListener("click",function(event){pow(4);})
    document.getElementById("bt-sin").addEventListener("click",function(event){sin();})
}
/**
 * Realiza la operación input^npow y muestra el resultado en <input/>
 */
function pow(npow){
    let input = document.getElementById("input");
    input.value = Math.pow(input.value, npow);
}
/**
 * Realiza la operación sin(x) con el valor de input
 */
function sin(){
    let input = document.getElementById("input");
    input.value = Math.sin(input.value);
}