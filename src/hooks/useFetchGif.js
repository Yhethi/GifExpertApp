import React, { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGif = (category) => {
  const [isLoading, setIsLoading] = useState(true);

  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
