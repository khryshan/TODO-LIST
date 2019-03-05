import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configStore';

import Layout from './Layout';
import InputTask from '../containers/InputTask';
import List from '../containers/List';


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
      
        <Layout />
          <InputTask />
          <List />
        
      </Provider>
		)
  }

};

export default Application;