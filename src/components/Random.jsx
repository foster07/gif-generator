import React from "react";
import useGif from "../Hooks/useGif";

export default function Random() {

  const { gifUrl, loading, fetchData } = useGif();

  return (
    <div className="w-11/12 p-4 sm:w-1/3 sm:p-6 rounded-md bg-green-300  flex justify-center">
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <div className="progress"></div>
        </div>
      ) : (
        <div className=" flex flex-col gap-3 items-center">
          <img src={gifUrl} loading="lazy" alt="randomGif img" />
          <button
            className="p-2 bg-yellow-600 text-xl text-white rounded-lg w-1/2 hover:shadow-lg"
            onClick={fetchData}
          >
            Generate
          </button>
        </div>
      )}
    </div>
  );
}
