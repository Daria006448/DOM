import './style.css';
import goblinImage from './assets/goblins.png';
import { createGame } from './game';

const board = document.querySelector('#game-board');

createGame(board, goblinImage);