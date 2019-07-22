import { number } from "prop-types";

/**
|--------------------------------------------------
| Interfaces go here
|--------------------------------------------------
*/


export interface IEpisode {
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image: {
      medium: string;
      original: string;
    };
    name: string;
    number: number;
    runtime: number;
    season: number;
    summary: string;
    url: string;
  }

  export interface IEpisodeProps {
    episodes: Array<IEpisode>,
    toggleFavAction: (episode: IEpisode) => IAction,
    favorites: Array<IEpisode>,
    summary: string, 
    show: IShow;
  }

  export interface IShow {
    externals: Array<any>;
    genres: Array<string>;
    id: number;
    image: Array<string>;
    language: string
    name: string
    network: Array<any>
    officialSite: string
    premiered: string
    rating: Array<number>
    runtime: number
    schedule: Array<any>
    status: string
    summary: string
    type: string
    updated: number
    url: string
    webChannel: string;
    weight: number;
    _embedded: Array<IEpisode>;
    _links: Array<string>;
  }

  export interface IState {
    show:  Array<any>;
    episodes:  Array<IEpisode>;
    favorites: Array<IEpisode>;
    summary: string;
  }
  
  export interface IAction {
    type: string;
    payload: any;
  }