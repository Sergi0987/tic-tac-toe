
const gameBoard = (function(){
    const board = Array(9).fill("");
    const container = document.querySelector(".container");
    board.forEach((item, index) => {
        const cell = document.createElement("div");
        card.classList.add("cell");
        container.appendChild(cell);
    });

    return {board};
})();

