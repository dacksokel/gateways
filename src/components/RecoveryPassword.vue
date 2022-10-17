<template>
  <div class="login-page">
    <div class="form">
      <header>
        <h2>Recovery Password</h2>
      </header>
      <form class="login-form" @submit.prevent="validarEmail">
        <input
          type="text"
          placeholder="Email prueba@prueba.com"
          v-model="email"
        />
        <button>Validar</button>
        <p class="message">
          Not registered?
          <RouterLink to="/registro">Create an account</RouterLink>
        </p>
        <p class="message">
          Already registered? <RouterLink to="/">Sign In</RouterLink>
        </p>
      </form>
    </div>
  </div>
  <!-- Put this part before </body> tag -->
  <input
    type="checkbox"
    id="my-modal"
    class="modal-toggle"
    :checked="showModal"
  />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Ingrese su Nuevo PASSWORD {{email}}</h3>
      <p class="py-4">
        <input
          type="password"
          class="input input-bordered w-full max-w-xs"
          placeholder="Ingrese Nuevo Password"
          v-model="password"
        />
      </p>
      <div class="modal-action">
        <button class="btn btn-success" @click="guadarPassword">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const showModal = ref(false);
const router = useRouter()
const uid = ref("");
const validarEmail = async () => {
  const data = await fetch(
    `http://192.168.32.100:6006/gateway/emailValidate/${email.value}`
  );
  let res = await data.json();
  if (res.status) {
    uid.value = res.uid;
    showModal.value = true;
    notify({
      type: "success",
      title: "Correo Valido",
      text: "El Correo Ingresado es valido",
    });
  }
};

const guadarPassword = async () => {
  if (password.value) {
    const data = await fetch(
      `http://192.168.32.100:6006/gateway/updatepassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: uid.value, password: password.value }),
      }
    );
    let res = await data.json();

    if (res.status) {
      showModal.value = false;
      notify({
        type: "success",
        title: "Password",
        text: `Password Cambiado Exitosamente!! al correo ${email.value}`,
      });
      router.push('/')
      return;
    }
  }
  notify({
    type: "error",
    title: "Password",
    text: "Ingrese Un nuevo Password de al menos 6 digitos",
  });
};
</script>

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

.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.login-form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.login-form button:hover,
.login-form button:active,
.login-form button:focus {
  background: #43a047;
}

.login-form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.login-form .message a {
  color: #4caf50;
  text-decoration: none;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}

.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}

.container .info {
  margin: 50px auto;
  text-align: center;
}

.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}

.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}

.container .info span a {
  color: #000000;
  text-decoration: none;
}

.container .info span .fa {
  color: #ef3b3a;
}
</style>
