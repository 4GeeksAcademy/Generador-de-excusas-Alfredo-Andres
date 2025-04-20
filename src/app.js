import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["Mi perro", "Mi novia", "El profesor", "Mi vecina"];
let action = ["Se comió", "orinó", "estrelló", "perdió"];
let what = ["mi tarea", "mi teléfono", "mi dinero", "mi coche"];
let when = ["justo antes de la clase", "mientras dormía", "mientras me ejercitaba", "durante el almuerzo"];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(array) {
  let randomIndex = getRandomNumber(0, array.length - 1);
  return array[randomIndex];
}

window.onload = function () {
  const excuseElement = document.getElementById("excuse");
  const excuse = `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}.`;
  excuseElement.textContent = excuse;
};
