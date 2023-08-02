/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let phrase = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let y = 0; y < adj.length; y++) {
      for (let x = 0; x < noun.length; x++) {
        phrase += `<div>${pronoun[i]}${adj[y]}${noun[x]}.com</div>`;
      }
    }
  }
  const targeHeading = document.querySelector("#excuse");
  targeHeading.innerHTML = phrase;
};
