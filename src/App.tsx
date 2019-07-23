import React from "react";
import "./index.css";
import "./App.css";
import { Store } from "./store";
import { IEpisodeProps } from "./interfaces";
import Title from "./Title";
import { fetchDataAction, toggleFavAction } from "./Actions";

export default function App(props:any) {
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

  console.log(props)
  return (
    <React.Fragment>
      <header className="title">
        <Title {..._props} />
      </header>
      {props.children}
    </React.Fragment>
  )
}
