

let board = ["", "", "", "", "", "", "", "", "",];
let playerTime = 0;
let symbols = ["o", "x"];
let contadorg = 0;
let contadorc = 0;

let gameOver = false;
let resultado = document.getElementById("finish");
let cntg = document.getElementById("cntg");
let cntc = document.getElementById("cntc");

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handleMove(position) {
    if (gameOver) {
        return alert("o jogo acabou");
    }
    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();
        if (!gameOver) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return setTimeout(() => {
                let winner = playerTime + 1;
                counter(winner);
            }, 10), true;
        } else {
            false;
        }
    }
}


function counter(winner) {
    if (winner == 1) {
        contadorg++;
        cntg.innerHTML = `${contadorg}`;
        resultado.innerHTML = "Guitarra ganhou o jogo";
    }
    if (winner == 2) {
        contadorc++;
        cntc.innerHTML = `${contadorc}`;
        resultado.innerHTML = "Controle ganhou o jogo";

    }
}