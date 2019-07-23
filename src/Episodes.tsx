import React from "react";
import FaveButton from "./FaveButton";

export default function Episodes(props: any) {
  const { episode } = props;

  return (
    <>
      <section
        className="flex-row flex-grow-0 flex-auto text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 w-3/12"
        key={episode.id}
      >
        <img
          className="mx-auto max-w-full	"
          src={episode.image.medium}
          alt={`Avatar Episode: ${episode.name}`}
        />
        <p>{episode.name}</p>
        <section>
          Season: {episode.season} <br />
          Episode: {episode.number} <br />
          <FaveButton {...props} />
        </section>
      </section>
    </>
  );
}
