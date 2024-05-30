const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const score = document.querySelector(".score")
        const introSection = document.querySelector(".game");

        playButton.addEventListener("click", () =>{
            introScreen.classList.add("fadeOut");
            score.classList.add("fadeIn");
            match.classList.add("fadeIn");
            //introSection.style.backgroundImage = "none"; 
        });
    };
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const compHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        const compOptions = [ 'Rock', 'Paper', 'Scissors'];

        options.forEach(Option=>{
            Option.addEventListener("click", function(){
                const compNum = Math.floor(Math.random() * 3);
                const compChoice = compOptions[compNum]; 
                console.log(compChoice);

                setTimeout(() => {
                    compareHands(this.textContent, compChoice);

                    playerHand.src = `./assets/${this.textContent}.png`;
                    compHand.src = `./assets/${compChoice}.png`;
                }, 2000)
                
                playerHand.style.animation = "shakePlayer 1s ease";
                compHand.style.animation = "shakeComputer 1s ease";
            });
        });



    };

    const updateScore = () => {
        const playScore = document.querySelector(".playerScore p");
        const compScore = document.querySelector(".computerScore p");
        playScore.textContent = pScore;
        compScore.textContent = cScore;

    }

    const compareHands = (playerChoice, compChoice) => {
        const winner = document.querySelector(".winner");
        if(playerChoice === compChoice){
            winner.textContent = 'It is a TIE!';
            return;
        }
        if (playerChoice === 'Rock'){
            if(compChoice === 'Scissors'){
                winner.textContent = 'You Won!';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Won!';
                cScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === 'Paper'){
            if(compChoice === 'Scissors'){
                winner.textContent = 'Computer Won!';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'You Won!';
                pScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === 'Scissors'){
            if(compChoice === 'Rock'){
                winner.textContent = 'Computer Won!';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'You Won!';
                pScore++;
                updateScore();
                return;
            }
        }

    }

//call functions
startGame();
playMatch();
//updateScore();
};

game();