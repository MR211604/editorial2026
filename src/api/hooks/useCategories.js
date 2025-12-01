import { useQuery } from "@tanstack/react-query";
import {
  getCategories,
  getCategoryById,
  getCategoryTypes,
} from "../categories/categoriesService";

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

export const useCategories = () => {
  const { data: allCategories, isLoading: isAllCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return {
    allCategories,
    isAllCategoriesLoading,
  };
};

export const useCategoryTypes = () => {
  const { data: allCategoryTypes, isLoading: isAllCategoryTypesLoading } =
    useQuery({
      queryKey: ["categoryTypes"],
      queryFn: () => getCategoryTypes(),
    });

  return {
    allCategoryTypes,
    isAllCategoryTypesLoading,
  };
};
