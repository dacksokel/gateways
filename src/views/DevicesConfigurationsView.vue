<template>
  <div>
    Dispositivos config {{user.email}}
  </div>
  <RouterView />

</template>

<script setup>
import { useGateway } from '@/composables/useGateway'
import { useUserAuth } from '@/composables/useUserAuth'
import { onUpdated } from '@vue/runtime-core'

const { user } = useUserAuth()
const { gateway } = useGateway()

console.log("dispositvios");
</script>

<style scoped>

</style>
