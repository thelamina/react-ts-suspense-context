import React, { Fragment, useState } from 'react';

type formElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
	text: string;
	complete: boolean;
}

const Todo = (): JSX.Element => {
	const [value, setValue] = useState<string>('');
	const [todos, setTodos] = useState<Array<ITodo>>([]);

	const handleSubmit = (e: formElem): void => {
		e.preventDefault();
		addTodo(value);
		setValue('');
	};

	const addTodo = (text: string): void => {
		const newTodos: Array<ITodo> = [...todos, { text, complete: false }];
		setTodos(newTodos);
	};

	const completeTodo = (index: number): void => {
		const newTodos: Array<ITodo> = [...todos];
		newTodos[index].complete = !newTodos[index].complete;
		setTodos(newTodos);
	};

	const removeTodo = (index: number): void => {
		const newTodos: Array<ITodo> = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<Fragment>
			<h1>Todo List</h1>

			<form onSubmit={handleSubmit}>
				<input
					type='text'
					required
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button type='submit'>Add Todo</button>
			</form>
			<section>
				{todos.map((todo: ITodo, index: number) => (
					<Fragment key={index}>
						<div
							style={{
								textDecoration: todo.complete
									? 'line-through'
									: '',
							}}
						>
							{todo.text}
						</div>
						<button
							type='button'
							onClick={() => completeTodo(index)}
						>
							{todo.complete ? 'Incomplete' : 'Complete'}
						</button>

						<button type='button' onClick={() => removeTodo(index)}>
							&times;
						</button>
					</Fragment>
				))}
			</section>
		</Fragment>
	);
};

export default Todo;
