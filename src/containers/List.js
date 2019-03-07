import List from '../components/List';
import { connect } from 'react-redux';

import { markTask, deleteTask, saveEditTask } from '../actions/tasks';
 
const mapStateToProps = state => {
  return { tasks: state.tasks };
}

const mapDispatchToProps = dispatch => {
  return {
    markTask: (data) => { dispatch(markTask(data)); },
    saveEditTask: (data) => { dispatch(saveEditTask(data)); },
    deleteTask: (data) => { dispatch(deleteTask(data)); },
  };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(List);