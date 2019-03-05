import InputTask from '../components/InputTask';
import { connect } from 'react-redux';

import { addTask } from '../actions/tasks';
 

const mapDispatchToProps = dispatch => {
  return {
    addTask: (data) => {
      dispatch(addTask(data));
    }
  };
}
 
export default connect(null, mapDispatchToProps)(InputTask);