import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodesList(props: any): any {
  const { episodes, toggleFavAction, favorites } = props;
  return episodes.map((episode: IEpisode) => {
    return (
      <section
        className="flex-row flex-grow-0 flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 w-3/12"
        key={episode.id}
      >
        <img
          className="mx-auto max-w-full	"
          src={episode.image.medium}
          alt={`Avatar Episode: ${episode.name}`}
        />
        <p>{episode.name}</p>
        <section>
          Season: {episode.season} <br />
          Episode: {episode.number} <br />
          <button type="button" onClick={() => toggleFavAction(episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfavorite"
              : "Favorite"}
          </button>
        </section>
      </section>
    );
  });
}
