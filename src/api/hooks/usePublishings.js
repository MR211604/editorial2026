import { useQuery } from "@tanstack/react-query";
import {
  getPublishingsByCategory,
  globalSearch,
} from "../publishings/publishingsService";

export const useSearchPublishings = (searchValue) => {
  const { data: publishings, isLoading } = useQuery({
    queryKey: ["publishings", searchValue],
    queryFn: () => globalSearch(searchValue),
  });

  return {
    publishings,
    isLoading,
  };
};

export const useSearchPublishingsByCategory = (
  categoryId,
  publishingType,
  page = 1,
  limit = 10
) => {
  const { data: publishings, isLoading } = useQuery({
    queryKey: [
      "publishingsByCategory",
      categoryId,
      publishingType,
      page,
      limit,
    ],
    queryFn: () =>
      getPublishingsByCategory(categoryId, publishingType, page, limit),
  });

  return {
    publishings,
    isLoading,
  };
};
