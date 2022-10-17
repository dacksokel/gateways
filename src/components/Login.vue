<script setup>
import { onMounted, ref } from "vue";
import SinginWithEmail from "./Login/SinginWithEmail.vue";
import SinginWithGoogle from "./Login/SinginWithGoogle.vue";

</script>

<template>
  <div class="login-page">
    <div class="form">
      <header>
        <h2>Login</h2>
      </header>
      <SinginWithEmail />
      <hr />
      <SinginWithGoogle />
    </div>
  </div>
</template>

<style scoped>
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
</style>
