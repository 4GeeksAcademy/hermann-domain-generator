/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.net', '.us', '.io']

function generarDominio(){
  let dominio = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for ( let x = 0; x < ext.length; x++){
            dominio.push(pronoun[i] + adj[j] + noun[k] + ext[x]);
          }
      }
    }
  }
  return dominio;
}

function desplegarDominios(){
  let dominios = generarDominio();
  let listaDominios = document.getElementById('listaDominios');

  dominios.forEach(dominio => {
    let listElemento = document.createElement("li");
    listElemento.textContent = dominio;
    listaDominios.appendChild(listElemento);
  });
}

window.onload = desplegarDominios;