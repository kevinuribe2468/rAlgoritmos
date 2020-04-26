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
function calcularpromedio(){
  var out = document.getElementById("out");
  var nota1 = parseInt(document.getElementById("nota1").value);
  var nota2 = parseInt(document.getElementById("nota2").value);
  var nota3 = parseInt(document.getElementById("nota3").value);
  var sum = nota1 + nota2 + nota3;
  alert(sum)
  var prom = Math.floor((sum)/3);
  alert(prom)
  if(prom == 10 ){
    msg = "A";
  }else if(prom == 9){
    msg = "B";
  }else if(prom == 8){
    msg = "B";
  }else{
    msg = "Reprobo";
  }
  out.innerHTML = msg;
}
function numeros(){
  var num1 = parseInt(document.getElementById("numero1").value);
  var num2 = parseInt(document.getElementById("numero2").value);
  var out = document.getElementById("salida");
  var rpta,pri;
  if (num1>num2) {
    pri = num1 + num2;
    rpta = "La suma es: " + pri;
  }else if(num2>num1){
    pri = (num1*num1)+(num2*num2);
    rpta = "La suma y los dos elevados al cuadrado es:" + pri;
  }else{
    rpta = "Los numeros son iguales"
  }
  out.innerHTML = rpta;


}
