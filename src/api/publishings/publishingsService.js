import { handleApiCall } from "../../helpers/handleApi";
import { fetchWithoutToken } from "../fetch";

export const globalSearch = async (searchValue) => {
  return handleApiCall(
    async () =>
      fetchWithoutToken(`api/publishings/globalSearch?search=${searchValue}`),
    "Error fetching publishings by search",
    "Error obteniendo publicaciones"
  );
};

export const getPublishingsByCategory = async (
  categoryId,
  publishingType = null,
  page = 1,
  limit = 10
) => {
  return handleApiCall(
    async () =>
      fetchWithoutToken(
        `api/publishings/getPublishings?publishing_type=${publishingType}&category=${categoryId}&page=${page}&limit=${limit}`
      ),
    "Error fetching publishings by category",
    "Error obteniendo publicaciones por categoria"
  );
};

// PublishingURL es el slug único de cada publicación
export const getPublishingByURL = async (publishingURL) => {
  return handleApiCall(
    async () =>
      fetchWithoutToken(`api/publishings/searchPublishing/${publishingURL}`),
    "Error fetching publishings by category",
    "Error obteniendo publicaciones por categoria"
  );
};
