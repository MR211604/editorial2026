import { handleApiCall } from "../../helpers/handleApi";
import { fetchWithoutToken } from "../fetch";

export const getActiveDocuments = async () =>
  handleApiCall(
    async () =>
      fetchWithoutToken("api/documents/getActiveDocuments", undefined, "GET"),
    "Error fetching active editorial documents",
    "Error obteniendo documentos",
  );

export const getDocumentBySlug = async (slug) =>
  handleApiCall(
    async () =>
      fetchWithoutToken(
        `api/documents/searchDocument/${encodeURIComponent(slug)}`,
        undefined,
        "GET",
      ),
    "Error fetching editorial document",
    "Error obteniendo documento",
  );
