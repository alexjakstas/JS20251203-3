"use strict";

const totalSubject = 5;

let firstScore = +prompt("Įveskite pirmjį pažymį: ");
let secondScore = +prompt("Įveskite antrąjį pažymį: ");
let thirdScore = +prompt("Įveskite trečiąjį pažymį: ");
let fourthScore = +prompt("Įveskite ketvirtąjį pažymį: ");
let fifthScore = +prompt("Įveskite penktąjį pažymį: ");
let avarageScore = (firstScore + secondScore + thirdScore + fourthScore + fifthScore) / totalSubject;

if (avarageScore > 9.01){
    console.log("Petriukas gaus tris saldainius");

}
else if (avarageScore <= 9 && avarageScore >= 7){
    console.log("Petriukas gaus du saldainius");

}
else if (avarageScore < 6.99){
    console.log("Petriukas gaus vieną saldainį");
}