import { userAuthState } from "../firebase";

// variables reactivas

export function useUserAuth() {
  const { user } = userAuthState();
  return {
    user
  };
}
