import { ADD_TASK, MARK_TASK, EDIT_TASK, DELETE_TASK } from '../constants/index';

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

const saveEditTask = data => {
  return {
    type: EDIT_TASK,
    payload: data,
  }
}

const deleteTask = data => {
  return {
    type: DELETE_TASK,
    payload: data,
  }
}

export { addTask, markTask, saveEditTask, deleteTask };