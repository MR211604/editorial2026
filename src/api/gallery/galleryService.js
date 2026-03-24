import { env } from "../../config/env";
import { handleApiCall } from "../../helpers/handleApi";
import { fetchWithoutToken } from "../fetch";

export const getInstagramPosts = async () => {
  return handleApiCall(
    async () =>
      fetchWithoutToken(
        "posts",
        null,
        "GET",
        `${env.CURATOR_API_URL}/${env.CURATOR_API_KEY}`,
      ),
    "Error fetching posts",
    "Error obteniendo publicaciones de Instagram",
  );
};
