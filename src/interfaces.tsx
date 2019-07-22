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

  export interface IState {
    show:  Array<any>;
    episodes:  Array<IEpisode>;
    favorites: Array<any>;
    summary: string;
  }
  
  export interface IAction {
    type: string;
    payload: any;
  }