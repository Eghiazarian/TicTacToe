let board = new Array(9).fill(null)
let currentPlayer = 'x'
let playerX = 'x'
let playerO = 'O'
let result = document.getElementById('result')
let winConditons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
window.onkeydown = (event) => {
    let enter = 13
    if(event.keyCode == enter){
        startNewGame()
    }
}

function startNewGame (){
    board = new Array(9).fill(null)
    renderBoard()
    result.innerHTML = ''
}
function addActions(){
    const startBtn = document.getElementById('start')
    startBtn.onclick = () => startNewGame()
}
addActions()


function renderBoard() {
    let gameBoard = document.getElementById('board')
    gameBoard.innerHTML = ""
    for (let i = 0; i < board.length; i++) {
        gameBoard.innerHTML += `<div class="col" style="${board[i] == playerX ? 'color:black':''}">${board[i] ?? ""}</div>`
    }

    let cols = document.getElementsByClassName('col')
    for (let i = 0; i < cols.length; i++) {
        cols[i].onclick = () => {
            if (checkWiner()) {
                
            } else {
                markOnBoard(i)
                renderBoard()
            }
            checkWiner()
            isItDraw()
        }
    }
}

function checkWiner() {
    for (let winConditon of winConditons) {
        let [a, b, c] = winConditon
        if (board[a] !== null && board[a] == board[b] && board[a] == board[c]) {
            result.innerHTML = 'Winer is ' + board[a]
            return true
        }
    }
    return false
}
function isItDraw(){

    // for(let element of board){
        
    //     if(element == null){
    //         result.innerHTML = ''
    //     }else{
    //         result.innerHTML = 'it is a draw'
    //     }
    // }

    if(!board.includes(null)){
        result.innerHTML = "It's a Draw"
    }
}

function markOnBoard(element) {
    if (board[element] == null) {

        if (currentPlayer == playerX) {
            board[element] = playerX
            currentPlayer = playerO

        } else {
            board[element] = playerO
            currentPlayer = playerX
        }
    }
}
renderBoard()
