import { useCategory } from "../../api/hooks/useCategories";
import { DialogosContext } from "./dialogosContext";

export function DialogosProvider({ children }) {
  const { category, isLoading } = useCategory("dialogos");

  return (
    <DialogosContext.Provider value={{ category, isLoading }}>
      {children}
    </DialogosContext.Provider>
  );
}
