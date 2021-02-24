import React from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';

const Main = (props: any): JSX.Element => {
	const { state } = React.useContext(Store);

	return (
		<>
			<header className='header'>
				<div>
					<h1>Family Guy</h1>
					<p>Pick your favourite episode!! </p>
				</div>
				<ul
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						listStyle: 'none',
					}}
				>
					<li style={{ padding: '10px' }}>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/faves'>
							Favourite(s): {state.favourites.length}
						</Link>
					</li>
				</ul>
			</header>
			{props.children}
		</>
	);
};

export default Main;
