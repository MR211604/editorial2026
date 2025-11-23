import { useCategory } from "../../api/hooks/useCategories";
import { TeoriaPraxisContext } from "./teoriaYPraxisContext";

export function TeoriaPraxisProvider({ children }) {
  const { category, isLoading } = useCategory("teoria_y_praxis");

  return (
    <TeoriaPraxisContext.Provider value={{ category, isLoading }}>
      {children}
    </TeoriaPraxisContext.Provider>
  );
}
