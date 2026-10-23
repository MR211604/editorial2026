import { useQuery } from "@tanstack/react-query";
import {
  getActiveDocuments,
  getDocumentBySlug,
} from "../documents/documentsService";

export const useActiveDocuments = () => {
  const query = useQuery({
    queryKey: ["activeEditorialDocuments"],
    queryFn: getActiveDocuments,
  });

  return {
    documents: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
};

export const useDocumentBySlug = (slug) => {
  const query = useQuery({
    queryKey: ["editorialDocument", slug],
    queryFn: () => getDocumentBySlug(slug),
    enabled: Boolean(slug),
  });

  return {
    document: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
};
