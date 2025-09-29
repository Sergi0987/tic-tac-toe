
const gameBoard = (function(){
    const board = Array(9).fill("");
    function newPlayer(name, position) {
        return{name, position}
    }
    const player1 = newPlayer("Sergio", "x");
    console.log(player1.name, player1.position);
    const player2 = newPlayer("Cathy", "o");
    console.log(player2.name, player2.position);

    let gameOver = false;
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    function checkWinner(mark){
        return winningCombos.some(combo => combo.every(i => board[i] === mark));
    }

    
    const players = [player1, player2];
    let currentPlayerIndex = 0;

    function nextTurn() {
        currentPlayerIndex = 1 - currentPlayerIndex;
    }

    const container = document.querySelector(".container");
    board.forEach((item, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = index;
        container.appendChild(cell);
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'lightblue';
        });
        cell.addEventListener('mouseleave', () => {
            cell.style.backgroundColor = 'white';
        });
        cell.addEventListener('click', () => {
            if(gameOver) return;
            if (cell.textContent === ""){
                const mark = players[currentPlayerIndex].position;
                const idx = Number(cell.dataset.index);
                console.log(idx);
                
                cell.textContent = mark;
                board[idx] = mark;

                const playerName = players[currentPlayerIndex].name;
                if(checkWinner(mark)) {
                    console.log(`${playerName} wins!`);
                    gameOver = true;
                    return;
                }
                if (board.every(v => v !== "")){
                    console.log("Draw!")
                    gameOver = true;
                    return;
                }
                nextTurn();
            }
            else {
                alert('Try again');
            }
        })

    });
    function reset() {
        board.fill("");
        const cells = container.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.textContent = "";
        });
        currentPlayerIndex = 0;
        gameOver = false;
    };

    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", reset);
    resetBtn.addEventListener("mouseenter", () =>{
        resetBtn.style.backgroundColor = 'lightblue';
    });
    resetBtn.addEventListener("mouseleave", () =>{
        resetBtn.style.backgroundColor = 'white';
    });

})();
