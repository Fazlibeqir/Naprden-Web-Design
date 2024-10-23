/*
Креирај функција која како аргумент ќе содржи низа од броеви, целта на оваа функција е да ги инкрементира сите елементи од листа.
Пример како треба да изгледа функцијата:
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
*/

'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (p1) => {
        p1 = p1.split(", ")

        console.log(incrementItems(p1))

        rl.close();

});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function incrementItems(p1) { // Write this function
  for(let i=0;i<p1.length;i++){
      p1[i]++;
  }
  return p1;
}
