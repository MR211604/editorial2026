import { useContext } from "react";
import { DialogosContext } from "../context/dialogosContext";

export function useDialogos() {
  const context = useContext(DialogosContext);
  if (!context) {
    throw new Error(
      "useTeoriaPraxis debe ser usado dentro de TeoriaPraxisProvider",
    );
  }
  return context;
}
