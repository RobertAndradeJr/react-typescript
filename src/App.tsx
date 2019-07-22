import React from "react";
// import ReactDOM from 'react-dom';
import "./index.css";
import "./App.css";
import { Store } from "./store";

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

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
      payload: dataJSON._embedded.episodes
    });
  };
  return (
    <React.Fragment>
      <img className="max-w-lg mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Logo_de_Avatar_la_leyenda_de_Aang.png/1600px-Logo_de_Avatar_la_leyenda_de_Aang.png" alt="Avatar: The Last Airbender" />
      <p className="text-center text-black text-3xl font-extrabold uppercase">Pick your favorite episode:</p>
      <section className="flex content-center flex-wrap justify-center items-center">
        {state.episodes.map((episode: any) => (
          <section className="flex-row flex-grow-0 flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 w-3/12" key={episode.id}>
            <img
              className="mx-auto"
              src={episode.image.medium}
              alt={`Avatar Episode: ${episode.name}`}
            />
            <p>{episode.name}</p>
            <section>
              Season: {episode.season} <br />
              Episode: {episode.number}
            </section>
          </section>
        ))}
      </section>
    </React.Fragment>
  );
};

export default App;
