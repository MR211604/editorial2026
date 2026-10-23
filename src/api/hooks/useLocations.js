import { useQuery } from "@tanstack/react-query";
import { getActiveLocations } from "../locations/locationsService";

export const useActiveLocations = () => {
  const query = useQuery({
    queryKey: ["activeEditorialLocations"],
    queryFn: getActiveLocations,
  });

  return {
    locations: query.data?.data || [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
