<template>
  <!-- The button to open modal -->

  <!-- Put this part before </body> tag -->
  <input type="checkbox" :id="`${id}my-modal-3`" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative">
      <label
        :for="`${id}my-modal-3`"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="text-lg font-bold">
        Editar Dispositivo {{ id }} {{ device.vendor }}
      </h3>
      <p class="py-4">
        <label class="label">Vendor:</label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
          v-model="device.vendor"
        />
      </p>
      <p class="py-4">
        <label class="label cursor-pointer">
          <span class="label-text">Status Offline/Online</span>

          <input
            type="checkbox"
            class="toggle toggle-primary"
            :checked="device.status"
            v-model="device.status"
          />
        </label>
      </p>
      <div class="modal-action">
      <label :for="`${id}my-modal-3`" class="btn">Guardar</label>
    </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["id", "device"]);

</script>

<style scoped></style>
