// eslint-disable-next-line no-unused-vars
import './styles.css';
import postScore from './post.js';
import refresh from './refresh.js';
import newGame from './newGame';

document.getElementById('data-submit').addEventListener('submit', postScore);
document.querySelector('.btn-refresh').addEventListener('click', refresh);