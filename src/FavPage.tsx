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
	return (
		<>
			<React.Suspense fallback={<h2>Loading</h2>}>
				<section className='episode-layout'>
					<EpisodesList {...props} />
				</section>
			</React.Suspense>
		</>
	);
};

export default FavPage;
