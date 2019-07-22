import React, { createContext, useReducer } from "react";

interface IState {
  show: [];
  episodes: [];
  favorites: [];
  summary: string;
}

interface IAction {
  type: string;
  payload: any;
}
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
