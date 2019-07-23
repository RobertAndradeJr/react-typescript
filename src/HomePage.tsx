import React, {  lazy } from "react";

const EpisodesList = lazy<any>(() => import("./EpisodesList"))

export default function HomePage(props:any) {

    return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
      <section className="flex flex-wrap justify-center items-center">
        <EpisodesList />  
        </section>

      </React.Suspense>
    </>
  );
}
