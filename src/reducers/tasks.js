import { ADD_TASK } from '../constants/index';

const initialState = [];

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newTask = {id: action.randomId, text: action.payload};
      return [...state, newTask]
    default:
      return state;
  }
}

export default user;