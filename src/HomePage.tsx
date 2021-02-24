import React from 'react';

import { IEpisodeProps } from './interfaces';
import { Store } from './Store';
import { toggleFavAction, fetchDataAction } from './Actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

const HomePage = () => {
	const { state, dispatch } = React.useContext(Store);
	React.useEffect(() => {
		state.episodes.length === 0 && fetchDataAction(dispatch);
	});

	const props: IEpisodeProps = {
		episodes: state.episodes,
		store: { state, dispatch },
		favourites: state.favourites,
		toggleFavAction,
	};
	return (
		<>
			<React.Suspense fallback={<div>lo ading</div>}>
				<section className='episode-layout'>
					<EpisodesList {...props} />
				</section>
			</React.Suspense>
		</>
	);
};

export default HomePage;
