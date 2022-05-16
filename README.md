# TheOdinProject-TicTacToe

Made the tic tac toe board with html and css.
Each box is a square div with specific borders.
Used flex-box to center items on box.

Created gameboard(not sure if its just 'x', 'o' array or the whole gameboard with divs).
Got the divs with queryselector all.
Populated the divs with gameboard list by looping.

playerPlay() and markBoard() work together to click on the board and mark it.

Get the index of clicked item:
convert boxes node list to list with Array.form,
get the clicked box's index from boxes list through event.target,

Only if there is empty box update it with player marker and update the gameboard list. gameboard list's index matches boxes index. So it is easy to link gameboard list to boxes list.

CheckGamewinner () checks when the game is won.
CheckGameOver () checks when game ends.

Tieing the game with termCounter reaches 9 and there is no winner.
Stops the game by empting boxes = [] when game is own.

restartGame(), resets everything and restart/resets the game.