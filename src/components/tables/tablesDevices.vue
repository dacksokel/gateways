<template>
  <div class="espacios overflow-x-auto mt-8">
    <table class="table w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Vendor</th>
          <th>Creation</th>
          <th>Status: Offline/Online</th>
          <th v-if="edit">Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover"
          v-for="dispositivo in devices"
          :key="dispositivo.id"
          @click="showModal"
        >
          <td>{{ dispositivo.id }}</td>
          <td>{{ dispositivo.vendor }}</td>
          <td>{{ dispositivo.creation }}</td>
          <td v-if="dispositivo.status">
            <input type="checkbox" class="toggle toggle-accent" checked/>
          </td>
          <td v-else>
            <input type="checkbox" class="toggle toggle-accent" disabled/>
          </td>
          <td v-if="edit">
            <label :for="`${dispositivo.id}my-modal-3`" class="btn modal-button"
              >Editar</label
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps(["devices", "edit"]);
</script>

<style scoped></style>
