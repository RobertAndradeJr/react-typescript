import { IState, IEpisode, IAction } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=avatar+the+last+airbender&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON
  });
};

export const toggleFavAction = (
  state: IState,
  episode: IEpisode | any,
  dispatch: any
): IAction => {
  const { favorites } = state;
  const episodeInFav = favorites.includes(episode);
  let action = episodeInFav ? "REMOVE_FAV" : "ADD_FAV";
  return dispatch({
    type: action,
    payload: episode
  });
};
