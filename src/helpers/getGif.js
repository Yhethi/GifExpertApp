export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dnccLxB3UTRK7Rk88Uel1rPGMZ5b0nK7&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data);
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height_downsampled.url,
  }));
  return gifs;
};
