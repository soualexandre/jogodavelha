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
function updateSquares(postion){
    let square = document.getElementById(postion.toString());
    let Symbol = board[postion];
    square.innerHTML = `<div class="${Symbol}"></div>`

}
