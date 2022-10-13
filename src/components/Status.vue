<template>
  <div></div>
</template>

<script setup>
    import { ref } from "vue";
import { genMacs, genSingleIp } from "@/helpers/GenMAcsIps.js";


// const gateways = ref({});
// let gatewaysConfig = {
//   id: genMacs(),
//   name: "GatewayDefault",
//   ipv4: 
// };
// gateways.value = gatewaysConfig;
// console.log("estatus ", gateways.value);

console.log(genSingleIp())


</script>

<style scoped>
</style>