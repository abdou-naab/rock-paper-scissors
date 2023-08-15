var choices = ["rock", "paper", "scissors"];

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  let i = Math.floor(Math.random() * choices.length);
  return choices[i];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  if (playerSelection === computerSelection) {
    // console.log(`Tie! Both chose ${playerSelection}.`);
    return [0, `Tie!`];
  } else if (
    (playerSelection === choices[0] && computerSelection === choices[2]) ||
    (playerSelection === choices[1] && computerSelection === choices[0]) ||
    (playerSelection === choices[2] && computerSelection === choices[1])
  ) {
    // console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
    return [1, `${playerSelection} beats ${computerSelection}.`];
  } else {
    // console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    return [-1, ` ${computerSelection} beats ${playerSelection}.`];
  }
}

function game(playerSelection) {
  let scoreInfo = document.querySelector(".score p");
  let playerScore = document.querySelector(".player-score");
  let computerScore = document.querySelector(".computer-score");

  let playerCounter = parseInt(playerScore.textContent);
  let computerCounter = parseInt(computerScore.textContent);

  let computerSelection = getComputerChoice();

  let playerHand = document.querySelector(".player > img");
  let computerHand = document.querySelector(".computer > img");

  playerHand.style.cssText = "animation-name :none;";
  computerHand.style.cssText = "animation-name :none;";

  playerHand.setAttribute("src", `imgs/${playerSelection}-p.png`);
  computerHand.setAttribute("src", `imgs/${computerSelection}-c.png`);

  let results = playRound(playerSelection, computerSelection);

  if (playerCounter < 5 && computerCounter < 5) {
    if (results[0] == 1) {
      playerCounter++;
      playerScore.textContent = playerCounter;
    } else if (results[0] == -1) {
      computerCounter++;
      computerScore.textContent = computerCounter;
    }
    scoreInfo.textContent = results[1];
    setTimeout(() => {
      playerHand.style.cssText = "animation-name :leftWaver;";
      computerHand.style.cssText = "animation-name :rightWaver;";
      playerHand.setAttribute("src", `imgs/rock-p.png`);
      computerHand.setAttribute("src", `imgs/rock-c.png`);
    }, 600);

    if (playerCounter === 5) {
      document.querySelector(".choices").style.display = "none";
      let p = document.createElement("p");
      p.textContent = "Congrats, You Won!";
      document.querySelector(".score div").before(p);
      scoreInfo.textContent = "";
    } else if (computerCounter === 5) {
      document.querySelector(".choices").style.display = "none";
      let p = document.createElement("p");
      p.textContent = "Don't give up chief !";
      document.querySelector(".score div").before(p);
      scoreInfo.textContent = "";
    }
  }
}

let playerRock = document.querySelector(" .choices :nth-child(1)");
let playerPaper = document.querySelector(" .choices :nth-child(2)");
let playerScissors = document.querySelector(" .choices :nth-child(3)");

playerRock.addEventListener("mouseover", function () {
  playerRock.setAttribute("src", "imgs/rock-0000.jpg");
});
playerRock.addEventListener("mouseout", function () {
  playerRock.setAttribute("src", "imgs/rock.gif");
});
playerPaper.addEventListener("mouseover", function () {
  playerPaper.setAttribute("src", "imgs/paper-0000.jpg");
});
playerPaper.addEventListener("mouseout", function () {
  playerPaper.setAttribute("src", "imgs/paper.gif");
});
playerScissors.addEventListener("mouseover", function () {
  playerScissors.setAttribute("src", "imgs/scissors-0000.jpg");
});
playerScissors.addEventListener("mouseout", function () {
  playerScissors.setAttribute("src", "imgs/scissors.gif");
});

playerRock.addEventListener("click", function () {
  game(choices[0]);
});
playerPaper.addEventListener("click", function () {
  game(choices[1]);
});
playerScissors.addEventListener("click", function () {
  game(choices[2]);
});

resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
  document.querySelector(".player-score").textContent = "0";
  document.querySelector(".computer-score").textContent = "0";
  document.querySelector(".choices").style.display = "flex";
  document.querySelector(".score > p").remove();
});

// let rock = document.getElementById('player-rock')
// let paper = document.getElementsByClassName('player-paper')
// let scissors = document.getElementsByClassName('player-scissors')

// let playerRock = document.getElementById('player-rock')
// let playerRock = document.getElementsByClassName('player-rock')
// console.log(playerRock)

// let playerRock = document.getElementById("player-rock");
// console.log(playerRock);
// console.log(playerRock.innerHTML);
// console.log(playerRock.textContent);

// let buttons = document.getElementsByTagName("button");
// console.log(buttons);

// let resBtn = document.querySelector("div.results button");
// console.log(resBtn.getAttribute("type"));
// attributes, hasAttribute, hasAttributes, removeAttribute
// setAttribute()
// resBtn.onclick = function () {
//   console.log("==> ", resBtn);
// };

// let playerPaper = document.getElementsByClassName("player-paper");
// console.log(playerPaper);

// let my_query = document.querySelector("p.computer-score");
// console.log(my_query);

///////////////////////////////////////////
// let elm = document.createElement("div");
// let att = document.createAttribute("data-custom");
// let txt = document.createTextNode("product one");
// elm.appendChild(txt);
// elm.className = "product ";
// elm.setAttributeNode(att);
// document.body.appendChild(elm);
// console.log(elm);
// elm.style.cssText = "font-weight: bold; border: 2px solid  green";
// elm.style.color = "red";
// elm.style.removeProperty("color");
// elm.style.setProperty("padding", "20px");

// console.log("%cdealing with the stylesheet", "color: red; font-size:20px;");
// console.log(document.styleSheets[0]);
// // document.styleSheets[0].cssRules[2].style.removeProperty('color');
// document.styleSheets[0].cssRules[2].style.setProperty(
//   "background-color",
//   "gray"
// );
/*
elm.children (only tags)
elm.childNodes (*, even blank lines)
elm.firstChild - elm.lastChild 
elm.firstElementChild elm.lastElementChild 
*/

// window.onscroll = function () {
//   console.log("scrolling");
// };
// onresize
// onload

// fields : onblur, focus, click

// let elm2 = document.getElementById("results-btn");
// console.log(elm2.classList);
// console.log(elm2.classList.contains("test"));
// console.log(elm2.classList.item("0"));
// console.log(elm2.classList.add("two"));
// console.log(elm2.classList.toggle("two"));
// console.log(elm2.classList.toggle("two"));

// console.log(elm2.classList);

// console.log();
// console.log();

// deal with elements :
/*
before 
after 
append
prepend
remove
*/

/* DOM traversing
nextSibling 
previousSibling
nextElementSibling
previousElementSibling
parentElement

*/
