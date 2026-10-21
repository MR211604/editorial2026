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

const isHost = (hostname, domain) =>
  hostname === domain || hostname.endsWith(`.${domain}`);

export const getVideoEmbed = (resourceURL) => {
  if (!resourceURL) return null;

  let url;
  try {
    url = new URL(resourceURL);
  } catch {
    return null;
  }

  const hostname = url.hostname.toLowerCase();
  const isYouTube = isHost(hostname, "youtube.com") || isHost(hostname, "youtu.be");
  const youtubeVideo = isYouTube ? getYouTubeInfo(resourceURL) : {};
  if (youtubeVideo.id) {
    return { provider: "youtube", ...youtubeVideo };
  }

  if (isHost(hostname, "tiktok.com")) {
    const videoId = url.pathname.match(/\/video\/(\d+)/)?.[1];
    return videoId
      ? {
          provider: "tiktok",
          src: `https://www.tiktok.com/embed/v2/${videoId}`,
        }
      : null;
  }

  if (isHost(hostname, "instagram.com")) {
    const match = url.pathname.match(/\/(reel|p|tv)\/([\w-]+)/i);
    return match
      ? {
          provider: "instagram",
          src: `https://www.instagram.com/${match[1]}/${match[2]}/embed/`,
        }
      : null;
  }

  if (isHost(hostname, "facebook.com") || isHost(hostname, "fb.watch")) {
    return {
      provider: "facebook",
      src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(resourceURL)}&show_text=false&width=500`,
    };
  }

  return null;
};
