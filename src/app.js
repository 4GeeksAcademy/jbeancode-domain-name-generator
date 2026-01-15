import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let pronouns = ['The', 'Our', 'Their', 'Your', 'His'];
let adjectives = ['chonky', 'hairy', 'lovable', 'annoying', 'desperate'];
let nouns = ['cat', 'aunt', 'sasquatch', 'Yoshi', 'BillMurray'];

const myUl = document.getElementById("myList");

for (let pronoun of pronouns) {
  for(let adjective of adjectives){
    for(let noun of nouns){
      console.log(`www.${pronoun}${adjective}${noun}.com`);
      const domain = `www.${pronoun}${adjective}${noun}.com`;
      const li = document.createElement("li");
        li.textContent = domain;
        myUl.appendChild(li)
    }
  }
}
};