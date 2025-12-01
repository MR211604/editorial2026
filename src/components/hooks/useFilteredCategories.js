import { useCategories, useCategoryTypes } from "../../api/hooks/useCategories";

export const useFilteredCategories = ({ categoryType }) => {
  const { allCategories } = useCategories();
  const { allCategoryTypes } = useCategoryTypes();

  // Encontrar el tipo de categoría que coincide con el categoryType proporcionado
  const matchedCategoryType = allCategoryTypes?.data?.find(
    (type) => type.name === categoryType
  );

  // Filtar las categorías según el tipo de categoría, agregando adicionalmente "Sin Categoria"
  const filteredCategories = allCategories?.data
    ?.filter((category) => {
      return category.category_type === matchedCategoryType?.id;
    })
    .map((category) => {
      // Filtrar hijos activos
      const activeChildren = category.children_recursive.filter(
        (child) => child.state === 1
      );

      // Si la categoría padre está activa O tiene hijos activos
      if (category.state === 1 || activeChildren.length > 0) {
        return {
          ...category,
          children_recursive: activeChildren,
        };
      }
      return null;
    });

  return { filteredCategories: filteredCategories?.filter(Boolean) };
};
