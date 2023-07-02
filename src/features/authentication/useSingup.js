import { useMutation } from "@tanstack/react-query";
import { singup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSingup() {
  const { mutate: singup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please verify account from the user's email address."
      );
    },
  });
  return { singup, isLoading };
}
