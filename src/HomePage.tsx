import React, {  lazy } from "react";


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
