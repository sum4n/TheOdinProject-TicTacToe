const Gameboard = (() => {

    // const playerX = document.getElementById("playerX");
    // const playerO = document.getElementById("playerO");

    let gameboard = ['', '', '', 
                       '', '', '', 
                       '', '', ''];

    let boxes = document.querySelectorAll(".box"); 
    
    const colorBoxes = (i,j,k) => {
        boxes[i].style.backgroundColor = "Black";
        boxes[j].style.backgroundColor = "Black";
        boxes[k].style.backgroundColor = "Black";
        gameOver = true;
    }

    const resetColorBoxes = () => {
        for(let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "";
        }
    }

    const populateBoard = () => {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = gameboard[i];
        }
    }

    const playerPlay = (e) => {
        for(const box of boxes){
            box.addEventListener('click', markBoard.bind(e));
        }
    }

    let playerMarker = ' ';

    const markBoard = (e) => {
        // console.log(e.target.textContent);
        // console.log(list_boxes.indexOf(e.target));
        // e.target.textContent = 'y';
        const list_boxes = Array.from(boxes);
        const index = list_boxes.indexOf(e.target);
        
        if (!e.target.textContent && !gameOver && termCount < 9) {
            if(playerMarker === ' ' || playerMarker === 'O'){
            playerMarker = 'X';
            } else {
                playerMarker = 'O'
            }
            gameboard[index] = playerMarker;
            populateBoard();
            showGameOver();
        }
   
    }

    let termCount = 0;
    let gameOver = false;
    const getGameWinner = () => {
        if(gameboard[0] && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) {
            colorBoxes(0,1,2);
            return (`${gameboard[0]}`);
        } else if (gameboard[0] && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) {
            colorBoxes(0,3,6);
            return (`${gameboard[0]}`)
        } else if (gameboard[0] && gameboard[0] === gameboard[4] && gameboard[0] === gameboard [8]) {
            colorBoxes(0,4,8);
            return (`${gameboard[0]}`)
        } else if (gameboard[1] && gameboard[1] === gameboard[4] && gameboard[1] === gameboard [7]) {
            colorBoxes(1,4,7);
            return (`${gameboard[1]}`)
        } else if (gameboard[2] && gameboard[2] === gameboard[5] && gameboard[2] === gameboard [8]) {
            colorBoxes(2,5,8);
            return (`${gameboard[2]}`)
        } else if (gameboard[2] && gameboard[2] === gameboard[4] && gameboard[2] === gameboard [6]) {
            colorBoxes(2,4,6);
            return (`${gameboard[2]}`)
        } else if (gameboard[3] && gameboard[3] === gameboard[4] && gameboard[3] === gameboard [5]) {
            colorBoxes(3,4,5);
            return (`${gameboard[3]}`)
        } else if (gameboard[6] && gameboard[6] === gameboard[7] && gameboard[6] === gameboard [8]) {
            colorBoxes(6,7,8);
            return (`${gameboard[6]}`)
        }

        termCount += 1;
        
    }

    const showGameOver = () => {
        let winMsg = document.querySelector('.winnerMsg');
        let winner = getGameWinner();

        // show whose turn in the msg div
        if (playerMarker == "X") {
            winMsg.textContent = `${playerO.value}'s turn : O`;
            winMsg.style.backgroundColor = "black";
        } else if (playerMarker == "O"){
            winMsg.textContent = `${playerX.value}'s turn : X`;
            winMsg.style.backgroundColor = "black";
        }

        if(winner === "X") {
            winner = playerX.value;
        } else if (winner === "O") {
            winner = playerO.value;
        }
            
        if(winner){
            winMsg.textContent = `${winner} have won the game.`;
            winMsg.style.backgroundColor = "black";
        } else if (!winner && termCount == 9){
            winMsg.textContent = "The game was a tie."
            winMsg.style.backgroundColor = "black";
        }
    }

    const restartGame = () => {
        resetAll();
        playerPlay();
        populateBoard();
        resetColorBoxes();
        
    }

    const resetAll = () => {
        let winMsg = document.querySelector('.winnerMsg');
        winMsg.textContent = `${playerX.value}'s turn : X`;
        winMsg.style.backgroundColor = "black";
        gameboard = ['', '', '', 
                       '', '', '', 
                       '', '', ''];
        termCount = 0;
        gameOver = false;
        playerMarker = ' ';
    }

    const restartGameClick = () => {
        const restartBtn = document.getElementById("restartBtn");
        restartBtn.addEventListener('click', restartGame);
    }
    

    return {
        // populateBoard,
        playerPlay,
        restartGameClick,
    };
}) ();

// Gameboard.populateBoard();
Gameboard.playerPlay();
Gameboard.restartGameClick();


const startGame = (() => {
    const startBtn = document.getElementById("nameSubmit");

    // const playerX = document.getElementById("playerX");
    // const playerO = document.getElementById("playerO");

    const btnClick = () => {
        startBtn.addEventListener('click', runGame);
    }

    const runGame = () => {
        const formElement = document.querySelector(".form");
        const gameBody = document.querySelector(".game");
        formElement.style.display = "none";
        gameBody.style.display = 'block';

        let winMsg = document.querySelector('.winnerMsg');
        winMsg.textContent = `${playerX.value}'s turn : X`
        winMsg.style.backgroundColor = "black";
        
        // console.log(playerX.value);
        // console.log(playerO.value);
    }

    return {
        btnClick,
    }

}) ();

startGame.btnClick();