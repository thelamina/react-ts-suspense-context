import React from 'react';
import { IEpisode } from './interfaces';

const EpisodesList = (props: any): JSX.Element => {
	const { episodes, favourites, toggleFavAction, store } = props;
	const { state, dispatch } = store;

	return episodes.map((episode: IEpisode) => (
		<section key={episode.id} className='episode-box'>
			<img src={episode.image?.medium} alt={`Naruto ${episode.name}`} />
			<div>{episode.name}</div>
			<section
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				Season:{episode.season} Number: {episode.number}
				<button
					type='submit'
					onClick={() => toggleFavAction(state, dispatch, episode)}
				>
					{favourites.includes(episode) ? 'UnFav' : 'Fav'}
				</button>
			</section>
		</section>
	));
};

export default EpisodesList;
