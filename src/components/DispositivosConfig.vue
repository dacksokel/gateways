<template>
  <div class="espacios overflow-x-auto mt-8">
    <table class="table w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Vendor</th>
          <th>Creation</th>
          <th>Status</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover"
          v-for="dispositivo in gateway.devices"
          :key="dispositivo.id"
          @click="showModal"
        >
          <td>{{ dispositivo.id }}</td>
          <td>{{ dispositivo.vendor }}</td>
          <td>{{ dispositivo.creation }}</td>
          <td>{{ dispositivo.status }}</td>
          <td>
            <label :for="`${dispositivo.id}my-modal-3`" class="btn modal-button"
              >Editar</label
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <EditDevicesModal
    v-for="device in gateway.devices"
    :id="device.id"
    :device="device"
    :key="device.id"
  />
</template>

<script setup>
import { useGateway } from "@/composables/useGateway";
import EditDevicesModal from "./Modals/EditDevicesModal.vue";
const { gateway } = useGateway();

const showModal = () => {};
console.log("dispositvios");
</script>

<style scoped>
.espacios {
  width: 60%;
  margin: 0 auto;
}
</style>
