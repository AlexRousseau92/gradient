/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducer from './reducer';

// je peux fabriquer mon store à l'aide d'un reducer et de createStore
// On peut donner à createStore en plus du reducer
// ce qu'on appelle des "enhancers" -> Des outils pour améliorer redux
// Si l'extension redux devtools est installée, elle va placer dans
// window.__REDUX_DEVTOOLS_EXTENSION__ une fonction.
// Exécuter cette fonction va me donner le(s) enhancer(s) nécessaires
// pour notre store redux communique avec l'extension.
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
