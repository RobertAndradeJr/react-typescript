import React from "react";
// import ReactDOM from 'react-dom';
import "./index.css";
import "./App.css";
import { Store } from "./store";
import { IAction, IEpisode } from "./interfaces";

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
   let action = episodeInFav ? 'REMOVE_FAV' : 'ADD_FAV';
   return dispatch({
    type: action,
    payload: episode
  })
  }
  const show = state.show;
  const episodes = state.episodes;
  const summary = state.summary;

  console.log(state);

  return (
    <React.Fragment>
      <div className="header">
        <a href={show.url}>
          <img
            className=" mx-auto max-w-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Logo_de_Avatar_la_leyenda_de_Aang.png/1600px-Logo_de_Avatar_la_leyenda_de_Aang.png"
            alt="Avatar: The Last Airbender"
          />
        </a>
      </div>
      <div className="bg-gray-100 p-2 m-12 description">
        <p className="text-left text-lg m-4">{summary}</p>
        <p className="text-center text-black text-3xl font-extrabold uppercase p-4">
          Pick your favorite episode:
        </p>
      </div>
      <section className="flex content-center flex-wrap justify-center items-center">
        {episodes.map((episode: IEpisode) => (
          <section
            className="flex-row flex-grow-0 flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 w-3/12"
            key={episode.id}
          >
            <img
              className="mx-auto"
              src={episode.image.medium}
              alt={`Avatar Episode: ${episode.name}`}
            />
            <p>{episode.name}</p>
            <section>
              Season: {episode.season} <br />
              Episode: {episode.number} <br />
              <button type="button" onClick={() => toggleFavAction(episode)}>
                {state.favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </section>
          </section>
        ))}
      </section>
    </React.Fragment>
  );
};

export default App;
