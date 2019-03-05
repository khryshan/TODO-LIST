import { ADD_TASK, MARK_TASK } from '../constants/index';

const addTask = data => {
  return {
    type: ADD_TASK,
    payload: data,
    generateId: true,
  }
}

const markTask = data => {
  return {
    type: MARK_TASK,
    payload: data,
  }
}

export { addTask, markTask };