import { handleApiCall } from "../../helpers/handleApi";
import { fetchWithoutToken } from "../fetch";

export const getCategoryById = async (id) => {
  return handleApiCall(
    async () => fetchWithoutToken(`api/categories/searchCategory/${id}`),
    "Error fetching category by ID",
    "Error obteniendo categoria"
  );
};
