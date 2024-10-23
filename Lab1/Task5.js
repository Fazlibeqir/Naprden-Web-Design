/*
Креирајте функција која ќе ја пресметува вкупната цена на купени производи во продавница. Функцијата треба да прима три аргументи:

бројот на производи тип А (кои чинат 50 денари по парче),
бројот на производи тип Б (кои чинат 30 денари по парче),
бројот на производи тип В (кои чинат 20 денари по парче).
Функцијата треба да ја врати вкупната цена која треба да се плати за сите купени производи.

Пример како треба да изгледа функцијата:
totalCost(3, 2, 5)  ➞ 290
totalCost(0, 0, 10) ➞ 200
totalCost(1, 1, 1)  ➞ 100
 */

'use strict'

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('', (input) => {
    input = input.split(", "); 
    console.log(totalCost(Number(input[0]), Number(input[1]), Number(input[2])));
    rl.close();
});

// DO NOT CHANGE ABOVE THIS LINE!!!!
function totalCost(nr1,nr2,nr3) {
    return nr1*50 + nr2*30 + nr3*20;
}
