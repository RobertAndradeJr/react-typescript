import React, { lazy } from "react";
import "./index.css";
import "./App.css";
import { Store } from "./store";
import { IAction, IEpisode } from "./interfaces";
import Title from "./Title";

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);
  const EpisodesList = lazy<any>(() => import("./EpisodesList"));

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=avatar+the+last+airbender&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let action = episodeInFav ? "REMOVE_FAV" : "ADD_FAV";
    return dispatch({
      type: action,
      payload: episode
    });
  };
  const { show, episodes, summary, favorites } = state;

  const props = {
    episodes,
    toggleFavAction,
    summary,
    favorites,
    show
  };

  return (
    <>
      <section className="title">
        <Title {...props} />
      </section>

      <section className="episodes flex content-center flex-wrap justify-center items-center">
        <React.Suspense fallback={<div>loading...</div>}>
          <EpisodesList {...props} />
        </React.Suspense>
      </section>
    </>
  );
};

export default App;
