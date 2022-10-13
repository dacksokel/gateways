<template>
  <div>
    <h4>
      Status Gateways
    </h4>
    <div>
      <img :src="`${gateway.img}`">
    </div>
    <ul>
      <li>Serial: {{gateway.id}}</li>
      <li>Nombre: {{gateway.name}}</li>
      <li>Ipv4 {{gateway.ipv4}}</li>
      <li>Cantidad de Dispositivos Conectados: {{gateway.devices.length}}</li>
      <li>Dispositivos Asociados: 
        <ol>
          <li v-for="device in gateway.devices">
          {{deviceFormat(device)}}
          </li>
        </ol>  
      </li>

    </ul>
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
  img:'https://www.3cx.es/wp-content/uploads/sites/19/beroNet-gateways-voip-min-300x125.png'
});

const deviceFormat = (d)=>{
  return `id: ${d.id}, vendor: ${d.vendor}, Creado: ${d.creation}, Status: ${d.status}`
}
</script>

<style scoped>
</style>