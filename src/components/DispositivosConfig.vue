<template>
  <div class="espacios">
    <AgreagrDeviceModal />
  </div>
  <TableDevices :devices="gateway.devices" :edit="true" :deleteDevice="deleteDevice" />
  <EditDevicesModal v-for="device in gateway.devices" :id="device.id" :device="device" :key="device.id" :editDevices="editDevices" />
</template>

<script setup>
import { useGateway } from "@/composables/useGateway";
import EditDevicesModal from "./Modals/EditDevicesModal.vue";
import AgreagrDeviceModal from "./Modals/AddDevicesModal.vue";
import TableDevices from './tables/tablesDevices.vue'

const { gateway, deleteDevice, editDevices } = useGateway();

console.log("dispositvios");
</script>

<style scoped>
.espacios {
  width: 60%;
  margin: 0 auto;
  padding: 0.5em;
}
</style>
