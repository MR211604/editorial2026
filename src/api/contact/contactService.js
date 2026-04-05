import { fetchWithoutToken } from "../fetch";
import { handleApiCall } from "../../helpers/handleApi";

export const saveContactMessage = async (contactData) => {
  return handleApiCall(
    () => fetchWithoutToken("api/emails/saveEmail", contactData, "POST"),
    "Error al guardar mensaje de contacto",
    "No se pudo enviar el mensaje, intente de nuevo.",
  );
};
