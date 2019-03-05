import List from '../components/List';
import { connect } from 'react-redux';

import { markTask, deleteTask } from '../actions/tasks';
 
const mapStateToProps = state => {
  return { tasks: state.tasks };
}

const mapDispatchToProps = dispatch => {
  return {
    markTask: (data) => { dispatch(markTask(data)); },
    deleteTask: (data) => { dispatch(deleteTask(data)); }
  };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(List);