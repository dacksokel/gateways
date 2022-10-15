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
        Congratulations random Internet user! este es el id: {{ id }}
      </h3>
      <p class="py-4">
       {{device}}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps(["id", "device"]);
</script>

<style scoped></style>
