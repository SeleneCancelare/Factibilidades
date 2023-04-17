// Pedir al usuario la distancia a recorrer en millas náuticas
const distancia = parseFloat(prompt("Ingrese la distancia a recorrer en millas náuticas:"));

// Calcular el tiempo de vuelo estimado en horas
const velocidad_media = 410; // knots, velocidad media del avión
const tiempo_vuelo = distancia / velocidad_media;

// Calcular el combustible necesario para el vuelo
const combustible = tiempo_vuelo * 2000; // kg/h, consumo de combustible

// Calcular la carga máxima permitida
const carga_maxima = 29400 - 18700 - combustible;

// Imprimir el resultado
console.log("La carga máxima permitida para este vuelo es de " + carga_maxima.toFixed(2) + " kg.");
