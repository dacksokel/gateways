// Import the functions you need from the SDKs you need
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { computed, onMounted, onUnmounted, ref } from "vue";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBiFD7cmSXCzXp0LgB-R3RBYxrLpl6_Sbc",
  authDomain: "prueba-dacksokel.firebaseapp.com",
  projectId: "prueba-dacksokel",
  storageBucket: "prueba-dacksokel.appspot.com",
  messagingSenderId: "954231447282",
  appId: "1:954231447282:web:9072feaf42973b30f53a6b",
});

export const userAuthState = () => {
  const user = ref({});
  const error = ref(null);

  const auth = getAuth();

  let unsubcribe;

  onMounted(() => {
    unsubcribe = onAuthStateChanged(
      auth,
      (u) => (user.value = u),
      (e) => (error.value = e)
    );
  });

  onUnmounted(() => unsubcribe());

  const isAuthenticated = computed(() => user.value != null);

  return {
    user,
    error,
    isAuthenticated,
  };
};

export const getUserState = () => {
  const auth = getAuth();
  return new Promise((resolve, reject) =>
    onAuthStateChanged(auth, resolve, reject)
  );
};
