/*
Напишете функција sort_by_num_calls која прима листа од функции и ги сортира (во растечки редослед) врз основа на тоа колку повици се потребни за секоја од функциите во листата да врати вредност која не е е функција.
пример:

const f1 = () => "hello"; // f1() ➞ "hello"
const f2 = () => () => "AWD"; // f2()() ➞ "AWD"
const f3 = () => () => () => "user"; // f3()()() ➞ "user"

console.log(sort_by_num_calls( [ f2, f3, f1] ) );
// Prints: [ [Function: f1], [Function: f2], [Function: f3] ]
// Reasoning: [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]

забелешка:

- доколку членот на низата не е функција, третирајте го како да има потреба од 0 повици.
- секоја функција се повикува без аргументиEvery function will be called with empty parameters.
- секоја функција треба да се повика барем еднаш
- вредностите што ги враќаат функциите може да бидат броеви, булови променливи, стрингови, итн.
 */

// Write the function sort_by_num_calls
// const sort_by_num_calls = function(){} ;
const sort_by_num_calls = function(functions){
    const countCalls = (fn) => {
        let count =0;
        let result = fn;
        while(typeof result === 'function'){
            count++;
            result = result();
        }
        return count;
    };
    return functions.slice().sort((a,b) => countCalls(a) - countCalls(b));
} ;
//Example Testing
const f1 = () => "hello";
const f2 = () => () => "AWD";
const f3 = () => () => () => "user";

console.log(sort_by_num_calls([f2, f3, f1]));