/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const randomIndexWho = Math.floor(Math.random() * who.length);
  const randomIndexAction = Math.floor(Math.random() * action.length);
  const randomIndexWhat = Math.floor(Math.random() * what.length);
  const randomIndexWhen = Math.floor(Math.random() * when.length);
  let phrase = `${who[randomIndexWho]} ${action[randomIndexAction]} ${what[randomIndexWhat]} ${when[randomIndexWhen]}`;

  const targeHeading = document.querySelector("#excuse");
  targeHeading.textContent = phrase;
};
