import { ADD_TASK } from '../constants/index';

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log(action);
      return {...state, task: action.payload }
    default:
      return state;
  }
}

export default user;