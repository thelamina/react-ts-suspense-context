import React from 'react';
import { IEpisodeProps } from './interfaces';

import { toggleFavAction } from './Actions';
import { Store } from './Store';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

const FavPage = () => {
	const { state, dispatch } = React.useContext(Store);

	const props: IEpisodeProps = {
		episodes: state.favourites,
		store: { state, dispatch },
		favourites: state.favourites,
		toggleFavAction,
	};

	const Message = (props: any) => (
		<h3 style={{ marginTop: '30px', textAlign: 'center' }}>{props.text}</h3>
	);
	if (state.favourites.length === 0) {
		return <Message text='Nothing here' />;
	}
	return (
		<>
			<React.Suspense fallback={<Message text='Loading...' />}>
				<section className='episode-layout'>
					<EpisodesList {...props} />
				</section>
			</React.Suspense>
		</>
	);
};

export default FavPage;
