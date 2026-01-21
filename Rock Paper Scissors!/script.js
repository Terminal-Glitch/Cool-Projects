let choice;
let rounds = 0;
let pointsPlayer = 0;
let pointsComputer = 0;
let numberArray = [1, 0, -1];
const randomIndex = Math.floor(Math.random() * numberArray.length);
let computer = numberArray[randomIndex];
let container  = document.getElementById("choices");

function print(text){
    let div = document.createElement("div");

    div.textContent = text;
    container.replaceChildren(div);
}

// 1 = rock
// 0 = paper
// -1 scissors

function main(){
    let rock = document.querySelector(".rock");
    let paper = document.querySelector(".paper");
    let scissors = document.querySelector(".scissors");
    let scoreboard = document.getElementById("scoreboard");
    let roundNumber = document.querySelector(".rounds");
    let timeoutId;

    rock.addEventListener("click", ()=>{
        clearTimeout(timeoutId);
        print("You Chose Rock!");
        choice = "rock";

        timeoutId = setTimeout(() => {
            print("Computer is Choosing...");
        }, 2000);

        timeoutId = setTimeout(() => {
            if(computer == -1){
                print("Computer chose scissors, you win!");
                computer = numberArray[randomIndex];
                pointsPlayer++;
                pointsComputer--;
                scoreboard.textContent = `Player: ${pointsPlayer} | Computer: ${pointsComputer}`;
                rounds++;
                roundNumber.textContent = `Rounds: ${rounds}`
            }

            else if(computer == 0){
                print("Computer chose paper, you lose!");
                computer = numberArray[randomIndex];
                pointsPlayer--;
                pointsComputer++;
                scoreboard.textContent = `Player: ${pointsPlayer} | Computer: ${pointsComputer}`;
                rounds++;
                roundNumber.textContent = `Rounds: ${rounds}`
            }

            else{
                print("Computer chose rock, it's a draw!");
                computer = numberArray[randomIndex];
                rounds++;
                roundNumber.textContent = `Rounds: ${rounds}`
            }

        }, 4000);
    })
    paper.addEventListener("click", ()=>{
        clearTimeout(timeoutId);
        print("You Chose Paper!");
        choice = "paper";
        timeoutId = setTimeout(() => {
            print("Computer is Choosing...");
        }, 2000);

        timeoutId = setTimeout(() => {
            if(computer == -1){
                print("Computer chose scissors, you lose!");
                computer = numberArray[randomIndex];
                pointsPlayer--;
                pointsComputer++;
                scoreboard.textContent = `Player: ${pointsPlayer} | Computer: ${pointsComputer}`;
                rounds++;
                roundNumber.textContent = `Rounds: ${rounds}`
            }

            else if(computer == 0){
                print("Computer chose paper, it's a draw!");
                computer = numberArray[randomIndex];
                rounds++;
                roundNumber.textContent = `Rounds: ${rounds}`
            }

            else{
                print("Computer chose rock, you win!");
                computer = numberArray[randomIndex];
                pointsPlayer++;
                pointsComputer--;
                scoreboard.textContent = `Player: ${pointsPlayer} | Computer: ${pointsComputer}`;
                rounds++;
                roundNumber.textContent = `Rounds: ${rounds}`
            }

        }, 4000);
    })
    scissors.addEventListener("click", ()=>{
        clearTimeout(timeoutId);
        print("You Chose Scissors!");
        choice = "scissors";
        timeoutId = setTimeout(() => {
            print("Computer is Choosing...");
        }, 2000);

        timeoutId = setTimeout(() => {
            if(computer == -1){
                print("Computer chose scissors, it's a draw!");
                computer = numberArray[randomIndex];
                rounds++;
                roundNumber.textContent = `Rounds: ${rounds}`
            }

            else if(computer == 0){
                print("Computer chose paper, you win!");
                computer = numberArray[randomIndex];
                pointsPlayer++;
                pointsComputer--;
                scoreboard.textContent = `Player: ${pointsPlayer} | Computer: ${pointsComputer}`;
                rounds++;
                roundNumber.textContent = `Rounds: ${rounds}`
            }

            else{
                print("Computer chose rock, you lose!");
                computer = numberArray[randomIndex];
                pointsPlayer--;
                pointsComputer++;
                scoreboard.textContent = `Player: ${pointsPlayer} | Computer: ${pointsComputer}`;
                rounds++;
                roundNumber.textContent = `Rounds: ${rounds}`
            }

        }, 4000);
    })
}

main();