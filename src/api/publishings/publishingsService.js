import { handleApiCall } from "../../helpers/handleApi";
import { fetchWithoutToken } from "../fetch";

export const globalSearch = async (searchValue) => {
  return handleApiCall(
    async () =>
      fetchWithoutToken(`api/publishings/globalSearch?search=${searchValue}`),
    "Error fetching category by ID",
    "Error obteniendo categoria"
  );
};
