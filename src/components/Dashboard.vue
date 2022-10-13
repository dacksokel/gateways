<template>
    <nav>

    </nav>
    <div>
        esto es el dashboard :D
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';


import { getAuth } from "@firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
console.log("🚀 ~ file: Dashboard.vue ~ line 19 ~ user", user)

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

</script>

<style scoped>

</style>