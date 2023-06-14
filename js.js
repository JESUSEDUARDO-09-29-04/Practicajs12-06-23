var pd, peso, dolar, Pes, Dol;
function pesoadolar(){
    pd=document.getElementById("pd").value 
    pd=Number.parseFloat(pd)
}
function pesos(){
    peso=document.getElementById("peso").value 
    peso=Number.parseFloat(peso)
}
function dolares(){
    dolar=document.getElementById("dolar").value 
    dolar=Number.parseFloat(dolar)
}
function calcularPesos(){
    Pes= dolar * pd
    document.getElementById("Pes").innerHTML="Tienes " + Pes + " Pesos";
    
}
function calcularDoloar(){
Dol= peso / pd
document.getElementById("Dol").innerHTML="Tienes " + Dol + " Dolares";

}
document.getElementById('clear').addEventListener('click', function() {
    clearDisplay();
  });
  function clearDisplay() {
    display.value = '';
    }

