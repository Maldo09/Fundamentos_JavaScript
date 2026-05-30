// Operadores matematicos

let a, b;
let c, d;

let suma, resta, multiplicacion, division, residuo, potencia;

//Obtener los datos a traves del usuario
a = prompt('Ingrese un numero: ');
b = prompt('Ingrese otro numero: ');

// Resultados de las operaciones
suma = a + b;// Aqui la operacion da un error debido a que se concadenan los datos
document.write('La suma es: ', suma, '<br>');
console.log('La suma es: ', suma);


resta = a - b;
document.write('La resta es: ', resta, '<br>');
console.log('La resta es: ', resta);

multiplicacion = a * b;
document.write('La multiplicacion es: ', multiplicacion, '<br>');
console.log('La multiplicacion es: ', multiplicacion);

division = a / b;
document.write('La division es: ', division, '<br>');
console.log('La division es: ', division);  

residuo = a % b;    
document.write('El residuo es: ', residuo, '<br>');
console.log('El residuo es: ', residuo);

potencia = a ** b;
document.write('La potencia es: ', potencia, '<br>');
console.log('La potencia es: ', potencia);

//Obtener los datos a traves del usuario
c = parseInt(prompt('Ingrese un numero: ')); 
d = parseFloat(prompt('Ingrese otro numero: '));

SUMA = c + d;
RESTA = c - d;
MULTIPLICACION = c * d;
DIVISION = c / d;
RESIDUO = c % d;    
POTENCIA = c ** d;

document.writeln("Los resultados de las operaciones son: ",
    "suma: ", SUMA, "<br>",
    "resta: ", RESTA, "<br>",
    "multiplicacion: ", MULTIPLICACION, "<br>",
    "division: ", DIVISION, "<br>",
    "residuo: ", RESIDUO, "<br>",
    "potencia: ", POTENCIA, "<br>"
);

console.log(" Las operaciones resueltas son: ",
    "suma: ", SUMA, " ",
    "resta: ", RESTA, " ",
    "multiplicacion: ", MULTIPLICACION, " ",
    "division: ", DIVISION, " ",
    "residuo: ", RESIDUO, " ",
    "potencia: ", POTENCIA, " "
);
