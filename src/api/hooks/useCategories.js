import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../categories/categoriesService";

export const useCategory = (id) => {
  const { data: category, isLoading } = useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoryById(id),
  });

  return {
    category,
    isLoading,
  };
};
