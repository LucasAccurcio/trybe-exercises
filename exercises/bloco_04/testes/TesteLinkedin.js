// ################### PERGUNTA ################### 
  /* Your code is producin this error: TypeError: Cannot read property 'reduce' of undefined.
  What does that mean?
  - You are calling a method named reduce on an object that does not exist.
   */

// ################### PERGUNTA ################### 
  /* Which of the following is NOT a unary operator?
  // Um operador unário é uma operação com apenas um operando.
  - delete - é um operador unário
  - instanceof * NÃO é um operador unário E sim um operador relacional assim como o IN
  - void - é um operador unário
  - typeof - é um operador unário
   */

// ################### PERGUNTA ################### 
/* The following program has a problem. What is it?
  var a = 2;
  var b = (a = 3) ? true : false;

  R: The condition in the ternary is using the assignment operator */
/*
  Which statement is true about the "async" attribute for the HTML script tag?
  R: It can be used only for internal or external JavaScript code that exports a promise.
  Note: The async attribute is only for external scripts (and should only be used if the src attribute is present).
  https://www.w3schools.com/tags/att_script_async.asp
  */

// ################### PERGUNTA ################### 
/* 
  How many prototype objects are in the chain for the following array?
  let arr = [];
  R: 2
  */
// ################### PERGUNTA ################### 
/* 
  What is the result of running the code shown?
  sum(10, 20);
  diff(10, 20);
  function sum(x,y) {
    return console.log(x + y);
  }
  let diff = function(x,y) {
    return console.log(x - y);
  }
  R: 
  - 30
  - ReferenceError: diff is not defined
  at <anonymous>:2:1 
*/

// ################### PERGUNTA ################### 
/* 
  How do you import the lodash library making its top-level API available as the "_" variable?
R: import _ from 'lodash';
  */
// ################### PERGUNTA ################### 
/*  
  Which statement is true about Function Programing?
  R: Side effects are not allowed - * Verdadeira
  Falsas:
  Code is grouped with the state it modifies
  Data fields and methods are kept in units.
  Every objects in the program has to be a function

*/
// ################### PERGUNTA ################### 
/* 
  For the following class how do you get the value of 42 from an instance of X?
  class x {
    get y() {
      return 42;
    }
  }
  const retorno = new x();
  console.log(retorno.y);

  Resposta: x.y
*/

// ################### PERGUNTA ################### 
/* 
  What is the name of a function whose execution can be suspended an resumed at a later point?
  R: Generator function
  O que são Generators e como eles funcionam?
  Generators são funções especiais que podem ser executadas, pausadas e continuadas em diferentes estágios da sua execução, tudo isso graças a nova palavra reservada yield.
*/

// ################### PERGUNTA ################### 
/* 
  Why is it usually better to work with Objects instead Arrays to store a collection of records?

  R: Working with objects makes the code more readable
*/

// ################### PERGUNTA ################### 
/* 
  var v = 1;
  var f1 = function() {
    console.log(v);
  };

  var f2 = function() {
    var v = 2;
    f1();
  };

  f2(); 

  Resposta: 1
*/

// ################### PERGUNTA ################### 
/* 
  Wich variable is an implicit parameter for every function in JavaScript
  - arguments - verdadeiro
  - argArray - falso
  - args - falso
  - argumentsList - falso
*/

// ################### PERGUNTA ################### 
/* 
class a {
  static m = 60;
}
let b = new a();
a.m = 80;
console.log(a.m); 

Responsta: 80
*/

// ################### PERGUNTA ################### 
/* 
  let thing;
  let func = (str = "no arg") => {
    console.log(str);
  }
  func(thing);
  func(null)

  Resposta:
  no arg
  null
 */

// ################### PERGUNTA ################### 
/* 
var array = ["a", 'b','c', 'd'];
array.pop();
console.log(array.pop());

Resposta: 'c'
Resta ["a", "b"]
*/

// ################### PERGUNTA ################### 
/* 
  const a = { x: 1 };
  const b = { x: 1 };
  console.log(b.x === a.x);

  Resposta: true
 */

// ################### PERGUNTA ################### 
/* 
  console.log(typeof 42.2);

  Resposta: number
 */

// ################### PERGUNTA ################### 
/* 
  const x = ["a", "b"];
  x[100] = 'gato';
  console.log(x.length);

  Resposta: 101
 */