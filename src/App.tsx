import React from "react";
import "./index.css";
import "./App.css";
import { Store } from "./store";
import { IEpisodeProps } from "./interfaces";
import { Link } from "@reach/router";
import Title from "./Title";
import HomePage from "./HomePage";
import { fetchDataAction, toggleFavAction } from "./Actions";

const App: React.FC = (props:any) => {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const { show, episodes, summary, favorites } = state;

  const _props: IEpisodeProps = {
    episodes,
    toggleFavAction,
    summary,
    favorites,
    show
  };

  console.log(state);

  return (
    <React.Fragment>
      <header className="title">
        <Title {..._props} />
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites: {favorites.length}</Link>
      </header>
      {props.children}
      <section className="episodes flex content-center flex-wrap justify-center items-center">
        <HomePage {..._props} state={state} dispatch={dispatch} />
      </section>
    </React.Fragment>
  );
};

export default App;
