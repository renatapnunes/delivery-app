import { LOGIN_DONE } from '../actions/exemploAction';

const INITIAL_STATE = {
  click: false,
};

const exemplo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_DONE:
    return { click: action.payload };
  default:
    return state;
  }
};

export default exemplo;
