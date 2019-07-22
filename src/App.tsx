import React, { lazy } from "react";
import "./index.css";
import "./App.css";
import { Store } from "./store";
import { IAction, IEpisode, IEpisodeProps } from "./interfaces";
import { Link} from '@reach/router';
import Title from "./Title";
import HomePage from "./HomePage";

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);
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

  const props: IEpisodeProps = {
    episodes,
    toggleFavAction,
    summary,
    favorites,
    show
  };

console.log(state);

  return (
    <>
      <header className="title">
        <Title {...props} />
        <Link to='/'>
          Home
        </Link>
        <Link to='/favorites'>
          Favorites: {favorites.length}
        </Link>
      </header>
      
      <section className="episodes flex content-center flex-wrap justify-center items-center">
        <HomePage {...props} />
      </section>
    </>
  );
};

export default App;
