// == Imports
import store from './store';
import {
  changeDirection, resetGradient, randFirst, randLast,
} from './actions';
import { generateSpanColor, randomHexColor } from './utils';

// == State
// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
const redraw = () => {
  renderNbColors();
  renderGradient();
  renderColors();
};

redraw();

store.subscribe(redraw);

// == Controls

document.getElementById('randAll')
  .addEventListener('click', () => {
    const action1 = randFirst(randomHexColor());
    const action2 = randLast(randomHexColor());
    store.dispatch(action1);
    store.dispatch(action2);
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    const action = randFirst(randomHexColor());
    store.dispatch(action);
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const action = randLast(randomHexColor());
    store.dispatch(action);
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    const action = changeDirection('90deg');
    store.dispatch(action);
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    const action = changeDirection('270deg');
    store.dispatch(action);
  });

document.getElementById('reset')
  .addEventListener('click', () => {
    const action = resetGradient();
    store.dispatch(action);
  });

document.getElementById('45')
  .addEventListener('click', () => {
    const action = changeDirection('45deg');
    store.dispatch(action);
  });

document.getElementById('135')
  .addEventListener('click', () => {
    const action = changeDirection('135deg');
    store.dispatch(action);
  });
document.getElementById('225')
  .addEventListener('click', () => {
    const action = changeDirection('225deg');
    store.dispatch(action);
  });
document.getElementById('315')
  .addEventListener('click', () => {
    const action = changeDirection('315deg');
    store.dispatch(action);
  });
