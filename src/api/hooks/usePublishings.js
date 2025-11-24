import { useQuery } from "@tanstack/react-query";
import { globalSearch } from "../publishings/publishingsService";

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
