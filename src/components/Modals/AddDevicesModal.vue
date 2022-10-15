<template>
    <!-- The button to open modal -->
    <label for="my-modal-3" class="btn modal-button">Agregar Dispositivo</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">Agregar Dispositivos</h3>
            <p class="py-4">
                <input type="text" v-model="vendor" placeholder="Ingrese el nombre del Proveedor/ Vendor">
            </p>
            <p class="py-4">
                <label class="label cursor-pointer">
                    <span class="label-text">Offline/Online</span>
                    <input type="checkbox" class="toggle toggle-primary" :checked="status" v-model="status"/>
                </label>
            </p>
            <button class="btn btn-outline btn-primary" @click="addD">Guardar</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGateway } from "@/composables/useGateway";

const { gateway, addDevice } = useGateway();
const vendor = ref(`dispositivo`);
const status = ref(true);

const addD = () => {
    let dispositivo = {
        id: gateway.value.devices.length + 1,
        vendor: vendor.value,
        creation: new Date("Jul 12 2022"),
        status: status.value
    }
    addDevice(dispositivo)
}
</script>

<style  scoped>

</style>