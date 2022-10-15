<template>
    <!-- The button to open modal -->
    <label for="my-modal-3" class="btn modal-button">Agregar Dispositivo</label>
    
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <button class="btn btn-outline btn-primary" @click="addD">Guardar</button>
  </div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import { useGateway } from "@/composables/useGateway";

const {gateway, addDevice} = useGateway()
const vendor = ref(`dispositivo `)
const status = ref('Offline')

const addD = ()=>{
    let dispositivo =  {
        id: gateway.value.devices.length + 1 ,
        vendor: vendor.value,
        creation: new Date("Jul 12 2022"),
        status: status.value
    }
    addDevice(dispositivo)
}
</script>

<style  scoped>

</style>