<template>
  <div class="navbar bg-base-300 mb-8">
    <div class="flex-1">
      <RouterLink
        class="btn btn-ghost normal-case text-xl"
        :to="{ name: 'status' }"
        >Status</RouterLink
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <!-- <li><a>Item 1</a></li> -->
        <li tabindex="0">
          <a>
            Config
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li>
              <RouterLink :to="{ name: 'gateway' }">Gateway</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'dispositivos' }"
                >Dispositivos</RouterLink
              >
            </li>
          </ul>
        </li>
        <li><a @click="logout">Sing out</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getAuth, signOut } from "@firebase/auth";
import { useRouter } from "vue-router";
const auth = getAuth();
const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);
    console.log("signup out");
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
