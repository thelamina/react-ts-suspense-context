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

	const Loading = () => (
		<h3 style={{ marginTop: '30px', textAlign: 'center' }}>Loading...</h3>
	);

	if (state.episodes.length === 0) {
		return <Loading />;
	}
	return (
		<>
			<React.Suspense fallback={<Loading />}>
				<section className='episode-layout'>
					<EpisodesList {...props} />
				</section>
			</React.Suspense>
		</>
	);
};

export default HomePage;
