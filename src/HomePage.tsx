import React, { useContext, lazy } from "react";
import { IEpisode, IAction, IEpisodeProps } from "./interfaces";
import { Store } from "./store";

export default function HomePage(props:any) {
    const EpisodesList = lazy<any>(() => import("./EpisodesList"));
    

  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <EpisodesList {...props} />
      </React.Suspense>
    </>
  );
}
