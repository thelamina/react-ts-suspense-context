import { IAction, IEpisode, IState } from './interfaces';

export const fetchDataAction = async (dispatch: any) => {
	const URL =
		'http://api.tvmaze.com/singlesearch/shows?q=family%20guy&embed=episodes';
	const data = await fetch(URL);
	const dataJSON = await data.json();
	return dispatch({
		type: 'FETCH_DATA',
		payload: dataJSON._embedded.episodes,
	});
};

export const toggleFavAction = (
	state: IState,
	dispatch: any,
	episode: IEpisode | any
): IAction => {
	const episodeInFav = state.favourites.includes(episode);

	let dispatchObject = {
		type: 'ADD_FAV',
		payload: episode,
	};

	if (episodeInFav) {
		const favWithoutEpisode = state.favourites.filter(
			(fav: IEpisode) => fav.id !== episode.id
		);
		dispatchObject = {
			type: 'REMOVE_FAV',
			payload: favWithoutEpisode,
		};
	}
	return dispatch(dispatchObject);
};
