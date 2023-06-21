'use strict';

let a;

function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {
  a = 5;
  console.log();
  return a;
}
function six() {}
function seven() {
  a = 7;
  console.log();
  return a;
}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {
  console.log(a);

  return a * a;
}
function dividedBy() {}

console.log( seven(times(five())) ) ;