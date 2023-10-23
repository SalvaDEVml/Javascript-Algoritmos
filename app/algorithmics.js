//Ejercicio 1
//let palabra = "palindrome";
//let silabas = palabra.split("");
//console.log(silabas.length);
//-----------------------------------------------------------//

//Ejercicio2
//let cadena = "no lemon, no melon";
//let cambio = cadena.split(" ");
//
//let palabra = cambio[1].split("", 5);
//let palabra2="";
//
//for (let index = 0; index < palabra.length; index++) {
//    palabra2 = palabra2 + palabra[index].split(",");
//}
//cambio [1] = palabra2;
//console.log(cambio[0]+ " " + cambio[3]+ ", " + cambio[2] + " " + cambio[1]);

//----------------------------------------------------------//

//Ejercicio 3
//let array = "";
//
//for (let index = 0; index < 4; index++) {
//    array +="****\n";
//}
//console.log(array)

//---------------------------------------------------------//

//Ejercicio 4
//let temperat = [32.5,31,29,30,28,26,27.5];
//let media = 0;
//
//for (let index = 0; index < temperat.length; index++) {
//    media += temperat[index]
//}
//
//console.log("La temperatura media es de: "+media/temperat.length)

//-----------------------------------------------------------//
//
////Ejercicio 5
//
//let decision;
//let options = {
//  replaceChars: false, //Booleano
//  capitalize: false, //Booleano
//  replaceSpaces: false, //Booleano
//};
//
//let resultPrompt;
//let result = []; //Resultado del prompt
//let loremText = "Lorem ipsum dolor sit amet";
//let startTime = performance.now();
//
//resultPrompt = prompt("Replace chars by signs");
//resultPrompt = resultPrompt.toLowerCase();
//comprobacionRespuesta(resultPrompt);
//resultPrompt = prompt("Capitalize");
//resultPrompt = resultPrompt.toLowerCase();
//comprobacionRespuesta(resultPrompt);
//resultPrompt = prompt("Replace Space with commas");
//resultPrompt = resultPrompt.toLowerCase();
//comprobacionRespuesta(resultPrompt);
//
//options.replaceChars = result[0];
//options.capitalize = result[1];
//options.replaceSpaces = result[2];
//
//do {
//    if (options.replaceChars == true) {
//        cambiar(loremText,"1");
//    } else {
//
//    }
//    if (options.capitalize==true) {
//        cambiar(loremText,"2");
//
//    } else {
//
//    }
//    if (options.replaceSpaces==true) {
//        cambiar(loremText,"3");
//    } else {
//
//    }
//    break;
//} while (result.length<3);
///*if (result >= 1 && result <= 3) {
//  cambiar(loremText, result);
//} else {
//  alert("Error de eleccion");
//}*/
//
//function cambiar(cadena, eleccion) {
//  let arrayCadena;
//  let palabra;
//  let endTime = new Date();
//
//  switch (eleccion) {
//    case "1":
//      arrayCadena = cadena.split("");
//      palabra = "";
//
//      for (let index = 0; index < arrayCadena.length; index++) {
//        if (arrayCadena[index] == "a") {
//          arrayCadena[index] = "@";
//          palabra = palabra + arrayCadena[index];
//        } else if (arrayCadena[index] == "e") {
//          arrayCadena[index] = "3";
//          palabra = palabra + arrayCadena[index];
//        } else if (arrayCadena[index] == "i") {
//          arrayCadena[index] = "1";
//          palabra = palabra + arrayCadena[index];
//        } else if (arrayCadena[index] == "o") {
//          arrayCadena[index] = "0";
//          palabra = palabra + arrayCadena[index];
//        } else if (arrayCadena[index] == "s") {
//          arrayCadena[index] = "$";
//          palabra = palabra + arrayCadena[index];
//        } else {
//          palabra = palabra + arrayCadena[index];
//        }
//      }
//      console.log(palabra);
//
//      break;
//    case "2":
//      arrayCadena = cadena.split(" ");
//      palabra = "";
//      let palabra2 = "";
//      let palabra3 = "";
//
//      for (let index = 0; index < arrayCadena.length; index++) {
//        palabra = arrayCadena[index].split("");
//
//        for (let index = 0; index < palabra.length; index++) {
//          if (index == 0) {
//            palabra2 = palabra[index].toUpperCase();
//          } else {
//            palabra2 = palabra2 + palabra[index].toString();
//          }
//        }
//        palabra3 = palabra3 + " " + palabra2;
//      }
//      console.log(palabra3);
//      //contarCarac(loremText);
//      //var tiempo = performance.now() - startTime;
//      //console.log("Work Done in " + tiempo + "ms");
//      break;
//    case "3":
//      arrayCadena = cadena.split(" ");
//      palabra = "";
//
//      for (let index = 0; index < arrayCadena.length; index++) {
//        if (index == 0) {
//          palabra = arrayCadena[index].toString();
//        } else {
//          palabra = palabra + "," + arrayCadena[index].toString();
//        }
//      }
//      console.log(palabra);
//      //contarCarac(loremText);
//      //var tiempo = performance.now() - startTime;
//      //console.log("Work Done in " + tiempo + "ms");
//      break;
//  }
//
//
//
//
//}
//contarCarac(loremText);
//var tiempo = performance.now() - startTime;
//console.log("Work Done in " + tiempo + "ms");
//
//function contarCarac(cadena) {
//    let arrayCaracter = cadena.split("");
//    let numCaract = arrayCaracter.length;
//    let arrayPalabr = cadena.split(" ");
//    let numPalab = arrayPalabr.length;
//
//    console.log(numPalab + " Words, " + numCaract + " Caracters");
//  }
//function comprobacionRespuesta(cadena) {
//    if (cadena == "y") {
//      result.push(true);
//    }
//    else if (cadena == "n") {
//        result.push(false);
//    }
//    else {
//      alert("Respuesta no valida");
//      result.push(false);
//    }
//  }
//
//-------------------------------------------------------------------------------------------//
////Ejercicio 6
//let chars;
//let words;
//let lenghtChars;
//let lenghtNoSpace=0,uniqueWords=0,uniquePercentage =0, minChars=0,maxChars =0, charAverage =0;
//let resultPrompt;
//let arrayMinChars=[], arrayMaxChars=[];
//
//
//resultPrompt = prompt("Introduzca Texto por favor: ");
//console.log("Este es el Texto: "+resultPrompt)
//
//resultPrompt = resultPrompt.toLowerCase();
//chars = resultPrompt.split("");
//words = resultPrompt.split(" ");
//
//console.log("Lenght: "+chars.length);
//console.log("Words: "+words.length);
//contarSinEspac(chars);
//console.log("Lenght Chars with out Space: "+lenghtNoSpace);
//uniqueWordsCount(words.sort());
//console.log("Unique Words: "+uniqueWords);
//console.log("unique Words Percentage: "+Math.round(uniquePercentage) + "%");
//console.log("Lenght of shortest word: "+minChars);
//console.log("Lenght of longest word: "+maxChars);
//console.log("Average word lenght: "+ charAverage)
//
//function uniqueWordsCount(cadena){
//    for (let index = 0; index < cadena.length; index++) {
//        if (cadena[index+1] === cadena[index]) {
//
//        } else {
//            uniqueWords +=1;
//        }
//
//        arrayMinChars.push(cadena[index].length);
//        charAverage += arrayMinChars[index];
//    }
//    uniquePercentage = (uniqueWords*100)/cadena.length; //Calcula el tantoporciento de palabras repetidas
//
//    minChars=Math.min(...arrayMinChars);
//    maxChars=Math.max(...arrayMinChars);
//    charAverage=Math.round(charAverage/cadena.length);
//}
//function contarSinEspac(cadena){
//    for (let index = 0; index < cadena.length; index++) {
//        if (cadena[index] != " ") {
//            lenghtNoSpace += 1;
//        } else {
//
//        }
//    }
//}
//
//------------------------------------------------------------------------------------------------//
//Ejercicio 7
//let numAleator = getNumRamdom(1,10);
//
//let numUser = prompt("Enter your Number: ");
//
//for (let index = 0; index < 2; index++) {
//    if (numAleator==numUser) {
//        alert("You Win!!!");
//
//        break;
//
//    } else {
//        alert("Try it Again, Chances:"+(3-(index+1)))
//        numUser = prompt("Enter your Number: ");
//    }
//    if(index == 1){
//        alert("Sorry, Good luck in love!!")
//    }
//}
//function getNumRamdom(min,max){
//    min = Math.ceil(min);
//    max = Math.floor(max);
//
//    return Math.floor(Math.random()*(max-min+1)+min);
//}
//-------------------------------------------------------------------------------------------------//
//
//Ejercicio 8
let numAleator = getNumRamdom(65, 90);
let comprobacion = false,
  charsMinuscu = false,
  charsMayuscul = false,
  charSimbolos = false,
  charNumer = false;

let numCharPassw = prompt(
  "Enter a number of Characters for your Password between 8 to 16"
);
comprobarNumPasswor(numCharPassw);

if (comprobacion == true) {
  let minisculas = prompt(
    "Do you like chars in low Case 'y' or 'n'"
  ).toLowerCase();
  let mayusculas = prompt(
    "Do you like chars in upper Case 'y' or 'n'"
  ).toLowerCase();
  let simbolos = prompt(
    "Do you like symbols chars in your password 'y' or 'n'"
  ).toLowerCase();
  let numbers = prompt(
    "Do you like numbers in your password 'y' or 'n'"
  ).toLowerCase();

  comprobarNumeros(numbers);
  comprobarSimbolos(simbolos);
  comprobarMinuscula(minisculas);
  comprobarMayuscula(mayusculas);
  comprobarBoleanos();

  let cadena = "";
  do {
    if (charSimbolos == true && cadena.length < numCharPassw) {
      cadena += String.fromCharCode(getNumRamdom(33, 47));
    } else {
    }
    if (charsMinuscu == true && cadena.length < numCharPassw) {
      cadena += String.fromCharCode(getNumRamdom(97, 122));
    } else {
    }
    if (charsMayuscul == true && cadena.length < numCharPassw) {
      cadena += String.fromCharCode(getNumRamdom(65, 90));
    } else {
    }
    if (charNumer == true && cadena.length < numCharPassw) {
      cadena += String.fromCharCode(getNumRamdom(48, 57));
    } else {
    }
  } while (cadena.length < numCharPassw);

  alert("Your Password is: " + cadena);
} else {
}

function comprobarNumeros(cadena) {
  if (cadena == "y") {
    charNumer = true;
  } else if (cadena == "n") {
  } else {
    alert("Incorrect Character!!!");
  }
}
function comprobarSimbolos(cadena) {
  if (cadena == "y") {
    charSimbolos = true;
  } else if (cadena == "n") {
  } else {
    alert("Incorrect Character!!!");
  }
}
function comprobarMayuscula(cadena) {
  if (cadena == "y") {
    charsMayuscul = true;
  } else if (cadena == "n") {
  } else {
    alert("Incorrect Character!!!");
  }
}
function comprobarMinuscula(cadena) {
  if (cadena == "y") {
    charsMinuscu = true;
  } else if (cadena == "n") {
  } else {
    alert("Incorrect Character!!!");
  }
}
function comprobarNumPasswor(num) {
  if (num >= 8 && num <= 16) {
    comprobacion = true;
  } else {
    alert("Numero de Digitos Incorrecto!!");
  }
}
function getNumRamdom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}
function comprobarBoleanos(){
    if (charsMayuscul==false && charNumer==false && charSimbolos == false && charsMinuscu==false) {
        charsMinuscu=true;
    } else {
        
    }
}
