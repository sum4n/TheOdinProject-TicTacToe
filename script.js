const Gameboard = (() => {
    const gameboard = ['', '', '', 
                       '', '', '', 
                       '', '', ''];

    const boxes = document.querySelectorAll(".box"); 
    const list_boxes = Array.from(boxes);
    
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
        console.log(list_boxes.indexOf(e.target));
        // e.target.textContent = 'y';
        const index = list_boxes.indexOf(e.target);
        
        if (!e.target.textContent) {
            if(playerMarker === ' ' || playerMarker === 'O'){
            playerMarker = 'X';
            } else {
                playerMarker = 'O'
            }
            gameboard[index] = playerMarker;
            populateBoard();
        }

        
    }

    

    return {
        populateBoard,
        playerPlay,
        gameboard,
    };
})();

Gameboard.populateBoard();
Gameboard.playerPlay();