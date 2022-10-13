<template>
  <div></div>
</template>

<script setup>
import { ref } from "vue";
import { genMacs, genSingleIp } from "@/helpers/GenMAcsIps.js";

const gateways = ref({
  id: genMacs(),
  name: "GatewayDefault",
  ipv4: genSingleIp(0),
  devices: [],
});

console.log("estatus ", gateways.value);
</script>

<style scoped>
</style>