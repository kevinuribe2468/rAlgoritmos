function numeros(){
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  num3 = parseInt(document.getElementById("num3").value);
  mostrar = document.getElementById("muestra");

  if (num1>num2 & num1>num3) {
    if (num2>num3) {
      mostrar.innerHTML= "El numero mayor es: " + num1 + "El numero menor es: "+ num3;
    }else {
      mostrar.innerHTML= "El numero mayor es: " + num1 + "El numero menor es: "+ num2;
    }
  }else if(num2>num1 & num2>num3){
    if (num1>num3) {
      mostrar.innerHTML= "El numero mayor es: " + num2 + "El numero menor es: "+ num3;
    }else{
      mostrar.innerHTML= "El numero mayor es: " + num2 + "El numero menor es: "+ num1;
    }
  }else if(num3>num2 & num3>num1){
    if (num1>num2){
      mostrar.innerHTML= "El numero mayor es: " + num3 + "El numero menor es: "+ num2;
    }else{
      mostrar.innerHTML= "El numero mayor es: " + num3 + "El numero menor es: "+ num1;
    }
  }else{
    mostrar.innerHTML= "No cumplio ";
  }
}
function calculardescuento(){
  var valor, total;
  resultado = document.getElementById("resultado");
  valor = document.getElementById("Vcompra").value;

  if (valor > 100) {
    total = valor * 1.1;
  }else{
    total = valor * 1.02;
  }
  resultado.innerHTML = "El total de la compra es: " + total;
}
