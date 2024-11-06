/*
За дадена низа од функции [f1, f2, f3, ..., fn], вратете нова функција fn што е функциска композиција на низата од функции.
Функциска композиција на низата [f(x), g(x), h(x)] е fn(x) = f(g(h(x))).
Функциската композиција на празна листа од функции е функцијата-идентитет f(x) = x.
Може да се претпостави дека секоја функција од низата како параметар прима еден цел број и како резултат враќа цел број.

----------------

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.

Примери
input	output	explination
пример 1: 	
functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
65
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
пример 2:	
functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
1000	
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
 пример 3: 	 
functions = [], x = 42
 42	 
The composition of zero functions is the 
identity function

 */
var compose = function(functions) {
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x); 
         }
        return x;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */