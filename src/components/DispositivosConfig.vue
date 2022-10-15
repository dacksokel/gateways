<template>
  <div class="overflow-x-auto">
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
        <tr class="hover" v-for="dispositivo in gateway.devices" :key="dispositivo.id">
          <td>{{ dispositivo.id }}</td>
          <td>{{ dispositivo.vendor }}</td>
          <td>{{ dispositivo.creation }}</td>
          <td>{{ dispositivo.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useGateway } from "@/composables/useGateway";
const { gateway } = useGateway();

console.log("dispositvios");
</script>

<style scoped></style>
