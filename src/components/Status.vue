<template>
  <div>
    <h4>
      Status Gateways
    </h4>
    <div class="container">
      <div>
        <img :src="`${gateway.img}`">
      </div>
      <ul>
        <li><b>Serial:</b> {{gateway.id}}</li>
        <li><b>Nombre:</b> {{gateway.name}}</li>
        <li><b>Ipv4:</b> {{gateway.ipv4}}</li>
        <li><b>Cantidad de Dispositivos Conectados: </b>{{gateway.devices.length}}</li>
        <li><b>Dispositivos Asociados:</b>
          <ol>
            <li v-for="device in gateway.devices">
              {{deviceFormat(device)}}
            </li>
          </ol>
        </li>

      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { genMacs, genSingleIp } from "@/helpers/GenMAcsIps.js";

const gateway = ref({
  id: genMacs(),
  name: "GatewayDefault",
  ipv4: genSingleIp(0),
  devices: [
    {
      id: genMacs(),
      vendor: 'dispositivo 1',
      creation: new Date('Jul 12 2022'),
      status: 'Online'
    },
    {
      id: genMacs(),
      vendor: 'dispositivo 2',
      creation: new Date('Jul 12 2022'),
      status: 'Online'
    },
    {
      id: genMacs(),
      vendor: 'dispositivo 3',
      creation: new Date('Jul 12 2022'),
      status: 'Offline'
    },
  ],
  img: 'https://www.3cx.es/wp-content/uploads/sites/19/beroNet-gateways-voip-min-300x125.png'
});

const deviceFormat = (d) => {
  return `id: ${d.id}, vendor: ${d.vendor}, Creado: ${d.creation}, Status: ${d.status}`
}
</script>

<style scoped>
.container div,
ul {
  width: 45%;
  display: inline-block;
  vertical-align: top;
  margin: 0 auto;
}

.container div {
  width: 20%;
}

.container div img {
  width: 99%;
}

.container ul {
  width: 70%;
  font-size: 20px;
  line-height: 40px;
}
</style>