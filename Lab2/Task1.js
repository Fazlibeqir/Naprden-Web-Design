/*Напишете функција extender која прима 2 објекти како аргументи.

Функцијата треба да го прошири првиот објект со својствата на вториот објект.

For example:

Input	Result
{"a":1,"b":2}
{"a":10,"c":2}
{ a: 1, b: 2, c: 2 }

 */
'use strict'

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.question('', (p1) => {
  rl.question('', (p2) => {
   
    p1 = JSON.parse(p1)
    p2 = JSON.parse(p2)
    
    extender(p1, p2)
    //console.log(extender(p1,p2))
    console.log(p1)

    rl.close();
  })
});

function extender(p1, p2) {
    for (let i in p2) {
        if (p2.hasOwnProperty(i) && !p1.hasOwnProperty(i)) {
            p1[i] = p2[i];
           
        }
    }
}
