import React from "react";
// import ReactDOM from 'react-dom';
import "./App.css";
import { Store } from "./store";

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  const {state, dispatch} = React.useContext(Store);

  React.useEffect(() => {
      state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=avatar+the+last+airbender&embed=episodes'
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    });
  };
  return (
    <React.Fragment>
      <h1>Avatar</h1>
      <p>Pick your favorite episode:</p>
      <section>
        {state.episodes.map((episode: any) => 
          <section key={episode.id}>
            <img src={episode.image.medium} alt={`Avatar Episode: ${episode.name}`}/>
            <p>{episode.name}</p>
            <section>
              Season: {episode.season} <br />
              Episode: {episode.number}
            </section>
          </section>
            )}
      </section>
    </React.Fragment>
  );
};

export default App;
