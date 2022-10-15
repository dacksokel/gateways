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
        </li>
        
      </ul>
    </div>
  </div>
  <TableDevices :devices="gateway.devices" :edit="false"/>
</template>

<script setup>
import { onUpdated } from '@vue/runtime-core'
import { useGateway } from '../composables/useGateway'
import TableDevices from './tables/tablesDevices.vue'

const { gateway } = useGateway()
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