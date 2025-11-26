import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  getPublishingByURL,
  getPublishings,
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

export const useGetPublishings = (
  categoryId,
  publishingType,
  page = 1,
  limit = 10
) => {
  const { data: publishings, isLoading } = useQuery({
    queryKey: ["publishings", categoryId, publishingType, page, limit],
    queryFn: () => getPublishings(categoryId, publishingType, page, limit),
  });

  return {
    publishings,
    isLoading,
  };
};

export const useGetPublishingByURL = (publishingURL) => {
  const { data: publishing, isLoading } = useQuery({
    queryKey: ["publishingByURL", publishingURL],
    queryFn: () => getPublishingByURL(publishingURL),
  });

  return {
    publishing,
    isLoading,
  };
};

export const useGetInfinitePublishings = (
  categoryId,
  publishingType,
  limit = 10
) => {
  return useInfiniteQuery({
    queryKey: ["infinitePublishings", categoryId, publishingType, limit],
    queryFn: ({ pageParam = 1 }) =>
      getPublishings(categoryId, publishingType, pageParam, limit),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { current_page, last_page } = lastPage?.pagination || {};
      return current_page < last_page ? current_page + 1 : undefined;
    },
  });
};
