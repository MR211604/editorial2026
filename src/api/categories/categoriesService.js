import { handleApiCall } from "../../helpers/handleApi";
import { fetchWithoutToken } from "../fetch";

export const getCategoryById = async (id) => {
  return handleApiCall(
    async () => fetchWithoutToken(`api/categories/searchCategory/${id}`),
    "Error fetching category by ID",
    "Error obteniendo categoria"
  );
};

export const getCategories = async () => {
  return handleApiCall(
    async () => fetchWithoutToken("api/categories/getCategories"),
    "Error fetching categories",
    "Error obteniendo categorias"
  );
};

export const getCategoryTypes = async () => {
  return handleApiCall(
    async () => fetchWithoutToken(`api/categoryTypes/getCategoryTypes`),
    "Error fetching category types",
    "Error obteniendo los tipos de categorías"
  );
};
