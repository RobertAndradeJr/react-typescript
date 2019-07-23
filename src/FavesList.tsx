import React from "react";
import { IEpisode } from "./interfaces";
import { Store } from "./store";
import Episodes from "./Episodes";

export default function EpisodesList(): JSX.Element {
  const { state } = React.useContext(Store);

  const { favorites } = state;

  return favorites.map((episode: IEpisode) => {
    return (
      <Episodes key={episode.id} episode={episode} favorites={favorites} />
    );
  });
}
