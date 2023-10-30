let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

seriesPending.push('Fleabag'); //añadimos una serie a la lista de pendientes

//miro todas las series que hay una por una. Cuando llego a Boolean 99 printeo encontrado
for (let serie = 0; serie< seriesPending.length; serie++) {
  console.log(`La serie es: ${seriesPending[serie]}, número ${serie}`);
  if (seriesPending[serie] === 'Boolean 99') {console.log('¡Encontrado!');}
}

//creo una lista vacia de series viendo
let seriesWatching = [];

//paso todas las series de la lista pendientes a la nueva lista de viendo
while (seriesPending.length > 0) {
  seriesWatching.push(seriesPending.shift());
}

//muestro el numero de elementos de cada lista despues de los cambios
console.log(`Numero de series viendo: ${seriesWatching.length}`);
console.log(`Numero de series pendientes: ${seriesPending.length}`);

//quito las series de la lista viendo
seriesWatching.splice(0, 5);
//vuelvo a mirar el numero de elementos de la lista viendo
console.log(`Numero de series viendo: ${seriesPending.length}`);