export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

export const changeDirection = (payload) => ({
  type: CHANGE_DIRECTION,
  payload,
});

export const RESET_GRADIENT = 'RESET';

export const resetGradient = () => ({
  type: RESET_GRADIENT,
});

export const RAND_FIRST = 'RAND_FIRST';

export const randFirst = (payload) => ({
  type: RAND_FIRST,
  payload,
});

export const RAND_LAST = 'RAND_LAST';

export const randLast = (payload) => ({
  type: RAND_LAST,
  payload,
});
