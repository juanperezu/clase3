"use strict";
var materiales = ['oxigeno', 'Helio', 'Litio', 'Berilio','carbono','hierro','aluminio'];
console.log(materiales.map(function (material) {
  return material.length;
})); //Salida experada: Array [8, 6, 7, 9]