import React from "react";

export default function Title(props: any) {
    const {show, summary} = props;
  return (
    <>
      <div className="header">
        <a href={show.url}>
          <img
            className=" mx-auto max-w-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Logo_de_Avatar_la_leyenda_de_Aang.png/1600px-Logo_de_Avatar_la_leyenda_de_Aang.png"
            alt="Avatar: The Last Airbender"
          />
        </a>
      </div>
      <div className="bg-gray-100 p-2 m-12 description">
        <p className="text-left text-lg m-4">{summary}</p>
        <p className="text-center text-black text-3xl font-extrabold uppercase p-4">
          Pick your favorite episode:
        </p>
      </div>
    </>
  );
}
