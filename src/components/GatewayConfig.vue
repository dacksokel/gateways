<template>
  <section>
    <header>
      <h2>Gateway Configuracion</h2>
    </header>
    <div class="container">
      <div>
        <img :src="`${gateway.img}`" />
        <p>
          <input  type="file" @click="cambiarImg" />
        </p>
      </div>
      <ul>
        <li><b>Serial:</b> {{ gateway.id }}</li>
        <li><b>Nombre:</b> <input type="text" v-model="gateway.name"></li>
        <li><b>Ipv4:</b> <input type="text" v-model="gateway.ipv4"></li>
        <li>
          <b>Cantidad de Dispositivos Conectados: </b
          >{{ gateway.devices.length }}
        </li>      
      </ul>
    </div>
    <button @click="guardarDatosGateway">
        Guardar
    </button>
  </section>
  <RouterView />
</template>

<script setup>
import { useGateway } from "@/composables/useGateway";
const { gateway, cambiarImg,guardarDatosGateway } = useGateway();
</script>

<style scoped>
section {
  width: 99%;
}

h2 {
  text-align: center;
}

.container {
  border: solid;
  width: 60%;
  margin: 0 auto;
}

.container div,
ul {
  width: 45%;
  display: inline-block;
  vertical-align: top;
  margin: 0 auto;
}

.container div {
  width: 40%;
}

.container div img {
  width: 99%;
}

.container ul {
  width: 45%;
  font-size: 20px;
  line-height: 40px;
}
</style>
