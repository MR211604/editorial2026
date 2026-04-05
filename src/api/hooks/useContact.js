import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveContactMessage } from "../contact/contactService";

export const useCreateEmail = () => {
  const queryClient = useQueryClient();

  const createUserEmailMutation = useMutation({
    mutationFn: (emailData) => saveContactMessage(emailData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userEmail"],
      });
    },
  });

  return {
    createUserEmail: createUserEmailMutation.mutate,
    isCreating: createUserEmailMutation.isPending,
    createUserEmailSuccess: createUserEmailMutation.isSuccess,
    createError: createUserEmailMutation.error,
  };
};
