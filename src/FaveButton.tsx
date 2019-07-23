import React from "react";
import { IEpisode } from "./interfaces";
import { toggleFavAction } from "./Actions";
import { Store } from "./store";

export default function FaveButton(props: any) {
  const { state, dispatch } = React.useContext(Store);
  const { episode, favorites } = props;
  return (
    <>
      <button
        type="button"
        onClick={() => toggleFavAction(state, episode, dispatch)}
      >
        {favorites.find((fav: IEpisode) => fav.id === episode.id)
          ? "Unfavorite"
          : "Favorite"}
      </button>
    </>
  );
}
