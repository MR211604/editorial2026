export const getYouTubeInfo = (url) => {
  if (!url) return { id: null, isShort: false };
  const regex =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regex);
  const id = match ? match[1] : null;
  const isShort = url.includes("/shorts/");
  return { id, isShort };
};

export const extractYouTubeId = (url) => {
  const { id } = getYouTubeInfo(url);
  return id;
};
