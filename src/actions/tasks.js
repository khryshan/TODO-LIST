import { ADD_TASK, MARK_TASK, DELETE_TASK } from '../constants/index';

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

const deleteTask = data => {
  return {
    type: DELETE_TASK,
    payload: data,
  }
}

export { addTask, markTask, deleteTask };