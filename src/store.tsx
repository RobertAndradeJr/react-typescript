import React, { createContext, useReducer } from "react";
import { IState, IAction, IEpisode } from "./interfaces";


const initialState: IState = {
  show: [],
  episodes: [],
  favorites: [],
  summary: ""
};

export const Store = createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        show: action.payload,
        episodes: action.payload._embedded.episodes,
        summary: action.payload.summary.replace(/(<([^>]+)>)/gi, "")
      };
    case "ADD_FAV":
      return {...state, favorites: [...state.favorites, action.payload ]}
    case "REMOVE_FAV":
      return {...state, favorites: [...state.favorites.filter(( fav: IEpisode )=> fav.id !== action.payload.id)]}
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}