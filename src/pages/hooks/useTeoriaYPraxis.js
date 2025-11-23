import { useContext } from "react";
import { TeoriaPraxisContext } from "../context/teoriaYPraxisContext";

export function useTeoriaPraxis() {
  const context = useContext(TeoriaPraxisContext);
  if (!context) {
    throw new Error(
      "useTeoriaPraxis debe ser usado dentro de TeoriaPraxisProvider"
    );
  }
  return context;
}
