const Gameboard = (() => {
    let gameboard = ['', '', '', 
                       '', '', '', 
                       '', '', ''];

    let boxes = document.querySelectorAll(".box"); 
    
    
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
        
        if (!e.target.textContent) {
            if(playerMarker === ' ' || playerMarker === 'O'){
            playerMarker = 'X';
            } else {
                playerMarker = 'O'
            }
            gameboard[index] = playerMarker;
            populateBoard();
            checkGameOver();
        }
   
    }

    let termCount = 0;
    const getGameWinner = () => {
        if(gameboard[0] && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) {
            return (`${gameboard[0]} wins!`);
        } else if (gameboard[0] && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) {
            return (`${gameboard[0]} wins!`)
        } else if (gameboard[0] && gameboard[0] === gameboard[4] && gameboard[0] === gameboard [8]) {
            return (`${gameboard[0]} wins!`)
        } else if (gameboard[1] && gameboard[1] === gameboard[4] && gameboard[1] === gameboard [7]) {
            return (`${gameboard[1]} wins!`)
        } else if (gameboard[2] && gameboard[2] === gameboard[5] && gameboard[2] === gameboard [8]) {
            return (`${gameboard[2]} wins!`)
        } else if (gameboard[2] && gameboard[2] === gameboard[4] && gameboard[2] === gameboard [6]) {
            return (`${gameboard[2]} wins!`)
        } else if (gameboard[3] && gameboard[3] === gameboard[4] && gameboard[3] === gameboard [5]) {
            return (`${gameboard[3]} wins!`)
        } else if (gameboard[6] && gameboard[6] === gameboard[7] && gameboard[6] === gameboard [8]) {
            return (`${gameboard[6]} wins!`)
        }

        termCount += 1;
        
    }

    const checkGameOver = () => {
        let winner = getGameWinner();
            
        if(winner){
            console.log(winner);
            boxes = [];
        }
            
        if (!winner && termCount == 9){
            console.log('Tie');
        }
    }

    const restartGame = () => {
        boxes = document.querySelectorAll(".box");
        gameboard = ['', '', '', 
                       '', '', '', 
                       '', '', ''];
        termCount = 0;
        playerMarker = ' ';
       
        playerPlay();
        populateBoard();
        
    }
    

    return {
        // populateBoard,
        playerPlay,
        restartGame
    };
})();

// Gameboard.populateBoard();
Gameboard.playerPlay();
