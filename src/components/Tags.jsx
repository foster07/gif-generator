import React, { useState } from "react";
import useGif from "../Hooks/useGif";

export default function Random() {
  const [tag, setTag] = useState("Enter Text Here");
  const { gifUrl, loading, fetchData } = useGif(tag);

  return (
    <div className="w-11/12 p-4 sm:w-1/3 sm:p-6 rounded-md bg-red-100  flex justify-center">
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <div className="progress"></div>
        </div>
      ) : (
        <div className=" flex flex-col gap-3 items-center">
          <div className="text-xl font-bold">Search Gif</div>
          <img
            className="w-full"
            src={gifUrl}
            loading="lazy"
            alt="randomGif img"
          />

          <input
            className="p-2 border border-blue-500 rounded-md bg-gray-200 italic shadow-xl"
            onChange={(event) => {
              setTag(event.target.value);
            }}
            type="text"
            name="tag"
            value={tag}
          />

          <button
            className="p-2 bg-yellow-600 text-xl text-white rounded-lg w-1/2 hover:shadow-lg"
            onClick={() => {
              fetchData(tag);
            }}
          >
            Generate
          </button>
        </div>
      )}
    </div>
  );
}
