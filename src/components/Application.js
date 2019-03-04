import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configStore';

import AddTask from '../containers/AddTask.js';
import ToDoList from './List.js';
import './app-style.css';

const store = configureStore();

class Application extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: ''
    };

    // this.handleTextInput = this.handleTextInput.bind(this);
    // this.saveTask = this.saveTask.bind(this);
    // this.handleItemDone = this.handleItemDone.bind(this);
    // this.handleItemDelete = this.handleItemDelete.bind(this);
  };


  // componentDidMount() {
  //   if (localStorage.getItem('items')) {
  //     const items = JSON.parse(localStorage.getItem('items'));

  //     this.setState({ items });
  //   }
  // }

  // componentDidUpdate() {
  //   localStorage.setItem('items', JSON.stringify(this.state.items));
  // }

  // handleTextInput(val) {
  //   this.setState({ text: val });
  // };

  // saveTask() {
  //   let task = {
  //     id: Date.now(),
  //     text: this.state.text,
  //     done: false
  //   }

  //   this.setState((prevState) => ({
  //     items: prevState.items.concat(task)
  //   }));

  // };

  // handleItemDone(id) {
  //   let items = [...this.state.items];
  //   items.forEach(item => {
  //     if (item.id == id && !item.done) {
  //       item.done = true;
  //     } else if (item.id == id && item.done) {
  //       item.done = false;
  //     };
  //   });

  //   this.setState({ items });
  // };

  // handleItemEdit() {
  //   alert("I am so sorry! But function doesnt work");
  // }

  // handleItemDelete(id) {
  //   let items = [...this.state.items];
  //   items.forEach((item, index, arr) => {
  //     if (item.id == id) arr.splice(index, 1);
  //   });
  //   this.setState({ items });
  // };
  


	render() {

		return (
      <Provider store={ store }>
       
          <div className="app__main-block">
            <div className="container">
              <h1 className="app__header">to do <span>list</span></h1>
                {/* <AddTask
                  textTask={this.state.text}
                  handleTextInput={this.handleTextInput}
                  saveTask={this.saveTask}
                /> */}
                <AddTask />
                {/* <ToDoList
                  itemsTasks={this.state.items}
                  checkTasks={this.handleItemDone}
                  editTask={this.handleItemEdit}
                  deleteTask={this.handleItemDelete}
                /> */}
            </div>
          </div>
       
      </Provider>

			
		);
	};
};

export default Application;