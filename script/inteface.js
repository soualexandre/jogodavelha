document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
});

function handleClick(event) {
    let square = event.target;
    let postion = square.id;

    handleMove(postion);

    updateSquares(postion);
}
function updateSquares(postion) {
    let square = document.getElementById(postion.toString());
    let Symbol = board[postion];
    square.innerHTML = `<div class="${Symbol}"></div>`
}

function resetGame() {
    resetAtribultes();
    let classO = document.querySelectorAll('.o');
    let classX = document.querySelectorAll('.x');

    for (i = 0; i < classO.length; i++) {
        classO[i].removeAttribute('class');
    }

    for (i = 0; i < classX.length; i++) {
        classX[i].removeAttribute('class');
    }
}



function resetAtribultes() {
            board = ["", "", "", "", "", "", "", "", "",];
            playerTime = 0;
            symbols = ["o", "x"];
            gameOver = false;
    }