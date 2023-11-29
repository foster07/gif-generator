import axios from "axios";
import { useEffect, useState } from "react";

export default function useGif(tag) {
  const apikey = import.meta.env.VITE_REACT_APP_GIF_API_KEY;

  const [gifUrl, setGifUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`;

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    setGifUrl(data.data.images.original.url);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    gifUrl,
    loading,
    fetchData,
  };
}
