import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let pronouns = ['The', 'Our', 'Thier', 'Your', 'His'];
let adjectives = ['chonky', 'hairy', 'lovable', 'annoying', 'desperate'];
let nouns = ['cat', 'aunt', 'sasquatch', 'Yoshi', 'BillMurray'];

// for (let pronoun in pronouns) {
//   for(let adjective in adjectives){
//     for(let noun in nouns){
//       console.log(`${pronouns[pronoun]}${adjectives[adjective]}${nouns[noun]}.com`)
//     }
//   }
// }

const domainNameSum = function (arr){
    let randInt = (Math.floor(Math.random()* 5))
    return arr[randInt]
}
      // console.log(domainNameSum(pronouns))
      // console.log(domainNameSum(adjectives))
      // console.log(domainNameSum(nouns))
      let newDomainName = console.log(`www.${domainNameSum(pronouns)}${domainNameSum(adjectives)}${domainNameSum(nouns)}.com`)
    };
const button = document.getElementById("myButton");
function changeText() {
  paragraph.innerHTML = `www.${domainNameSum(pronouns)}${domainNameSum(adjectives)}${domainNameSum(nouns)}.com`;
}
document.getElementById("paragraph");
button.addEventListener("click", changeText);