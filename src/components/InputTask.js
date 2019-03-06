import React from 'react';
import './add-task-style.css';


class InputTask extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			output: '',
		}
  };


	addTask = (event) => {
		event.preventDefault();
		this.props.addTask(this.state.output);
		this.setState({ output: '' });
	}

	handelInput = (event) => {
		event.preventDefault();
		let task = event.target.value;
		this.setState({ output: task });
	}

  
	render() {

		return (

			<form className="add__block">
				<input
					className="add__input" 
					type="text" 
					placeholder="Add Task to List, press Enter to save" 
					onChange = {this.handelInput}
					value = {this.state.output}
				/>
				<button className="add__btn" onClick={this.addTask}>
					<svg viewBox="0 0 32 32" width="40px" height="40px" fill="#cccccc">
						<path d="M 28.28125 6.28125 L 11 23.5625 L 3.71875 16.28125 L 2.28125 17.71875 L 10.28125 25.71875 L 11 26.40625 L 11.71875 25.71875 L 29.71875 7.71875 Z "/>
					</svg>
				</button>
			</form>

		);
	};
};

export default InputTask;