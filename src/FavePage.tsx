import React, { lazy } from "react";

const EpisodesList = lazy<any>(() => import("./FavesList"));

export default function HomePage(props: any) {
  return (
    <>
      <React.Suspense fallback={""}>
        <section className="flex flex-wrap justify-center items-center">
          <EpisodesList />
        </section>
      </React.Suspense>
    </>
  );
}
