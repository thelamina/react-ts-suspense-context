import React from 'react';

const Playground = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case 'ADD':
				return state + action.payload;
			case 'SUBTRACT':
				return state - 1;
			case 'RESET':
				return (state = 0);
			default:
				return state;
		}
	};
	const [count, dispatch] = React.useReducer(reducer, 0);

	return (
		<>
			<div>{count}</div>
			<button onClick={() => dispatch({ type: 'ADD', payload: 3 })}>
				+
			</button>
			<button onClick={() => dispatch('SUBTRACT')}>-</button>
			<button onClick={() => dispatch('RESET')}>Reset</button>
		</>
	);
};

export default Playground;
