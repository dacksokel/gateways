import { userAuthState } from "../firebase";

// variables reactivas

export const useUserAuth = () => {
  const { user } = userAuthState();

  return {
    user,
  };
};
