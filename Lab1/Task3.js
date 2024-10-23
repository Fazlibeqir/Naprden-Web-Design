/*
Креирај функција, која на влез ќе прима две низи составени од стрингови, кои претставуваат состав на два сендвича. Целта на оваа функција е да спореди дали сендвичите се направени од ист тип на леб, така што лебот е секогаш поставен на почетокот и крајот на низата.
Пример како треба да изгледа функцијата:

hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
) ➞ true
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

        console.log(hasSameBread(p1,p2))

        rl.close();
    })
});

// DO NOT CHANGE ABOVE THIS LINE!!!!

function hasSameBread(sandwich1,sandwich2) { // Write this function
    if(sandwich1.length >0 && sandwich2.length>0){
        if(sandwich1[0] === sandwich2[0]){
            if(sandwich1[sandwich1.length-1] === sandwich2[sandwich2.length-1]){
                return true;
            } else{
                return false;
            }
        } else{
            return false;
        }
    }
    return false;

}

