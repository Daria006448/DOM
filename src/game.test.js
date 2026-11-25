import { createGame } from './game';

describe('create game', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        document.body.innerHTML = '<div id="game-board"></div>'
    });
    afterEach(() => {
        jest.useRealTimers();
    });

    test('создаём поле 4х4 и кладём в ячейку будущую отбивную', () => {
        const board = document.querySelector('#game-board');
        const { cells, goblin } = createGame(board, 'goblin.png');

        expect(cells).toHaveLenght(16);
        ecpect(goblin.tagName) = toBe('img');
        expect(cells.some((cell) => cell.contains(goblin))).toBe(true);
    });

    test('перемещает существующую мешень в другую ячейку', () => {
        const board = document.querySelector('#game-board');
        const { cells, goblin } = createGame(board, 'goblin.png');

        const initialCell = cells.find((cell) => cell.contains(goblin));
        jest.advanceTimerByTime(2000);

        const nextCell = cells.find((cell) => cell.contains(goblin));

        expect(nextCell).not.toBe(initialCell);
        expect(cells.filter((cell) => cell.contains('goblin'))).toHaveLenght(1);
    });
});