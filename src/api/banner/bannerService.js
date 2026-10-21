import { handleApiCall } from "../../helpers/handleApi";
import { fetchWithoutToken } from "../fetch";

export const getActiveBanner = async () => {
  return handleApiCall(
    async () => fetchWithoutToken(`api/banners/getActiveBanner`),
    "Error fetching active banner",
    "Error obteniendo el video activo",
  );
};
