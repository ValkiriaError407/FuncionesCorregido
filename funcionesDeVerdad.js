
alert ("Calculador de promedio");

numero1 = Number(prompt("Numero 1"));
numero2 = Number(prompt("Numero 2"));

function sumaPromedio (numero1, numero2) {
  return (numero1 + numero2);
}
let divisionPromedio = sumaPromedio (numero1, numero2) / 2;

alert ("El promedio entre estos dos números es de" + " " + (divisionPromedio));
