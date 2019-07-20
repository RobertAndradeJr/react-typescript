import React, { createContext } from 'react'

interface IState {
    episodes: [],
    favorites: []
}

const initialState: IState = {
    episodes: [],
    favorites: []
};

export const Store = createContext<IState>(initialState);

function reducer() {
    //pass
}

export function StoreProvider(props: any): JSX.Element {
return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}