/*
Да се напише функција merge која ќе спојува 2 полиња во JavaScript. Функцијата треба да го врати резултантното поле.
Спојувањето треба да се изврши како на примерот:

1, 2, 3, 4, 5
100, 200, 300, 400, 500
[ [ '1', '100' ],
  [ '2', '200' ],
  [ '3', '300' ],
  [ '4', '400' ],
  [ '5', '500' ] ]
Поради едноставност, претпоставете дека работите со низи од стрингови кои се задаваат на стандарден влез.
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
    p1 = p1.split(", ")
    p2 = p2.split(", ")
   
    console.log(merge(p1,p2))

    rl.close();
  })
});

// DO NOT CHANGE ABOVE THIS LINE!!!!

const merge = function(p1,p2){
    const result=[];

    for(let i=0;i<p1.length;i++){
        result.push([p1[i],p2[i]]);
    }
    return result;
} // Write this function
