import { handleApiCall } from "../../helpers/handleApi";
import { fetchWithoutToken } from "../fetch";

export const getLastActiveBanner = async () => {
  return handleApiCall(
    async () => fetchWithoutToken(`api/banners/getLastActiveBanner`),
    "Error fetching last active banner",
    "Error obteniendo el último banner activo",
  );
};
