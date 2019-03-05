import List from '../components/List';
import { connect } from 'react-redux';

// import { addTask } from '../actions/tasks';
 
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTask: (data) => {
//       dispatch(addTask(data));
//     }
//   };
// }
 
export default connect(mapStateToProps)(List);