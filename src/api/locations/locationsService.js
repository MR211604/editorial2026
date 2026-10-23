import { handleApiCall } from "../../helpers/handleApi";
import { fetchWithoutToken } from "../fetch";

export const getActiveLocations = async () =>
  handleApiCall(
    async () =>
      fetchWithoutToken("api/locations/getActiveLocations", undefined, "GET"),
    "Error fetching active editorial locations",
    "Error obteniendo ubicaciones",
  );
