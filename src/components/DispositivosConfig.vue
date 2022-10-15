<template>
  <div class="espacios overflow-x-auto mt-8">
    <table class="table w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Vendor</th>
          <th>Creation</th>
          <th>Status</th>
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
              <label for="my-modal-3" class="btn modal-button">open modal</label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- The button to open modal -->

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative">
      <label
        for="my-modal-3"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
      <p class="py-4">
        You've been selected for a chance to get one year of subscription to use
        Wikipedia for free!
      </p>
    </div>
  </div>
</template>

<script setup>
import { useGateway } from "@/composables/useGateway";
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
