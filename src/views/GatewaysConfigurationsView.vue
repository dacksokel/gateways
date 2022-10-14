<template>
  <div>
    
  </div>
  <RouterView />

</template>

<script setup>
import { useGateway } from '@/composables/useGateway'
import { useUserAuth } from '@/composables/useUserAuth'

const {user } = useUserAuth()
const { gateway } = useGateway()
console.log("🚀 ~ file: GatewaysConfigurationsView.vue ~ line 14 ~ user", user)
console.log("gateways");
</script>

<style scoped>

</style>
