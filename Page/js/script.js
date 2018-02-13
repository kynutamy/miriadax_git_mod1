/**
 * Añade los eventos al cargar la pagina
 */
window.onload = function(){
    document.getElementById("bt-cube").addEventListener("click",function(event){cube();})
    document.getElementById("bt-cuarta").addEventListener("click",function(event){cuarta();})
}
/**
 * Realiza la operación x^3 con el valor del input
 */
function cube(){
    let input = document.getElementById("input");
    input.value = Math.pow(input.value, 3);
}
/**
 * Realiza la operación x^4 con el valor de input
 */
function cuarta(){
    let input = document.getElementById("input");
    input.value = Math.pow(input.value, 4);
}
function sin(){
var num = document.getElementById("n1");
num.value = Math.sin(num.value);
}