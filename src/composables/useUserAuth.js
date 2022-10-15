import { ref, reactive, toRefs, readonly, onUpdated } from "vue";
import { getAuth, signOut } from "@firebase/auth";
import { userAuthState } from "../firebase";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

// variables reactivas

export function useUserAuth() {
    const { user } = userAuthState();
  // vue metodos
  onUpdated(() => {
    console.log("🚀 ~ file: useUserAuth.js ~ line 11 ~ user", user.value.email);
  });

  return {
    user,
  };
}
