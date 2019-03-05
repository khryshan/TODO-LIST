import { ADD_TASK } from '../constants/index';

const addTask = data => {

  return {
    type: ADD_TASK,
    payload: data,
    generateId: true
  }
}

export { addTask };