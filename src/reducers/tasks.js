import { ADD_TASK, MARK_TASK } from '../constants/index';

const initialState = [];

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newTask = {id: action.randomId, text: action.payload, status: false};
      return [...state, newTask]
    case MARK_TASK:
      let newState = state.map(item => {
        if (item.id === action.payload) { return {...item, ...item.status = !item.status}}
        return item;
      })

      return newState
    default:
      return state;
  }
}

export default user;