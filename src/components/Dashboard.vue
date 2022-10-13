<template>
  <Menu/>
  <!-- <div>esto es el dashboard :D {{ user.email }}</div> -->
  <RouterView />

</template>

<script async setup>
import { onMounted, ref, onUpdated } from "vue";
import { getAuth, signOut } from "@firebase/auth";
import { userAuthState } from "../firebase";
import { useRouter } from "vue-router";

// componetes
import Menu from './menu/Menu.vue'

const auth = getAuth();
const { user } = userAuthState();
const router = useRouter();

onUpdated(()=>{}); //esta linea es importante ya que con esta actualizamos el render y los datos que vienen del userAythState
</script>

<style scoped></style>
