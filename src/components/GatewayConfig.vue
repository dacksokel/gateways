<template>
  <section>
    <header>
      <h2>Gateway Configuracion</h2>
    </header>
    <div class="container">
      <div>
        <img :src="`${gateway.img}`" />
        <p>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload
            file</label>
          <input
            class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input" type="file" @change="cambiarImg">

        </p>
      </div>
      <ul>
        <li><label class="label">
            <span class="label-text text-xl text-gray-900 dark:text-white">Serial:
              {{ gateway.id }}
            </span>
          </label></li>
        <li>
          <label class="label">
            <span class="label-text text-xl text-gray-900 dark:text-white">Nombre:</span>
          </label>
          <input type="text" placeholder="Ingrese el nombre aqui" class="input input-bordered w-full max-w-xs"
            v-model="gateway.name" />
        </li>
        <li>
          <label class="label">
            <span class="label-text text-xl text-gray-900 dark:text-white">IPV4:</span>
          </label>
          <input type="text" placeholder="Ingrese una Ip valida 192.168.xxx.xxx"
            class="input input-bordered w-full max-w-xs" v-model="gateway.ipv4" />
        </li>
        <li>
          <b>Cantidad de Dispositivos Conectados: </b>{{ gateway.devices.length }}
        </li>
      </ul>
    </div>
    <button class="btn btn-active" id="guardar" @click="guardarDatosGateway">
      Guardar
    </button>
  </section>
  <RouterView />
</template>

<script setup>
import { useGateway } from "@/composables/useGateway";
const { gateway, cambiarImg, guardarDatosGateway } = useGateway();
</script>

<style scoped>
section {
  width: 99%;
  text-align: center;
}

h2 {
  text-align: center;
}

.container {  
  width: 60%;
  margin: 0 auto;
}

.container div,
ul {
  width: 45%;
  display: inline-block;
  vertical-align: top;
  margin: 0 auto;
  padding: 1em;
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
#guardar{  
}
</style>
