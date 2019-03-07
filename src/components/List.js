import React from 'react';

import Task from './Task'

import './todo-list-style.css';



const List = props => {

		const { tasks, markTask, deleteTask, saveEditTask } = props;

		return (
			tasks.length !== 0 
				?
				tasks.map(item => 
					<li key={item.id} className="item__block">
						<Task
							task={item}
							markTask={markTask}
							saveEditTask={saveEditTask}
							deleteTask={deleteTask}
						/>
					</li>
				)
				: 
				<div className="message">Congratulation! All done.</div>	
		)

	};

export default List;
