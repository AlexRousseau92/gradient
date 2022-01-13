import {
  CHANGE_DIRECTION, RESET_GRADIENT, RAND_LAST, RAND_FIRST,
} from '../actions';

const stateIntial = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

export default (state = stateIntial, action = {}) => {
  switch (action.type) {
    case RESET_GRADIENT:
      return stateIntial;
    case RAND_FIRST:
      return {
        ...state,
        firstColor: action.payload,
        nbColors: state.nbColors + 1,
      };
    case RAND_LAST:
      return {
        ...state,
        lastColor: action.payload,
        nbColors: state.nbColors + 1,
      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.payload,
      };
    default:
      return state;
  }
};
