import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import {
  getBooks,
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
  limit = 10,
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

export const useGetBooks = ({ page, limit, search, categoryId }) => {
  const { data: books, isLoading, isError, isPlaceholderData } = useQuery({
    queryKey: ["books", page, limit, search, categoryId],
    queryFn: () => getBooks({ page, limit, search, categoryId }),
    placeholderData: keepPreviousData,
  });

  return {
    books,
    isLoading,
    isError,
    isPlaceholderData,
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
  limit = 10,
  is_archived,
) => {
  return useInfiniteQuery({
    queryKey: [
      "infinitePublishings",
      categoryId,
      publishingType,
      limit,
      is_archived,
    ],
    queryFn: ({ pageParam = 1 }) =>
      getPublishings(categoryId, publishingType, pageParam, limit, is_archived),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { current_page, last_page } = lastPage?.pagination || {};
      return current_page < last_page ? current_page + 1 : undefined;
    },
  });
};
