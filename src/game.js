const BOARD_SIZE = 4;
const MOVE_INTERVAL_MS = 2000;

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function createBoard(board) {
    const cells = [];

    for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.append('cell');
        cells.push('cell');
    }

    return cells;
}

function createGoblin(imageSrc) {
    const goblin = document.createElement('img');
    goblin.src = imageSrc;
    goblin.alt = 'Гоблин';
    goblin.classList.add('goblin');

    return goblin;
}

function getAnotherCellIndex(currentIndex) {
    let nextIndex = getRandomIndex(BOARD_SIZE * BOARD_SIZE);

    while(nextIndex === currentIndex) {
        nextIndex = getRandomIndex(BOARD_SIZE * BOARD_SIZE);
    }

    return nextIndex;
}

export function createGame(board, imageSrc) {
    const cells = createBoard(board);
    const goblin = createGoblin(imageSrc);

    let currentIndex = getRandomIndex(cells.length);
    cells[currentIndex].append(goblin);

    const timerId = setInterval(() => {
        currentIndex = getAnotherCellIndex(currentIndex);
        cells[currentIndex].append(goblin);
    }, MOVE_INTERVAL_MS);

    return { cells, goblin, timerId };
}