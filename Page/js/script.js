/**
 * Add event listener when page is loaded
 */
window.onload = function(){
    document.getElementById("bt-cube").addEventListener("click",function(event){cube();})
    document.getElementById("bt-cuarta").addEventListener("click",function(event){cuarta();})
}
/**
 * 
 */
function cube(){
    let input = document.getElementById("input");
    input.value = Math.pow(input.value, 3);
}
/**
 * 
 */
function cuarta(){
    let input = document.getElementById("input");
    input.value = Math.pow(input.value, 4);
}
