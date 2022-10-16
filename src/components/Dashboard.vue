<template>
  <vue-element-loading :active="showLoading" :is-full-screen="true" />
  <Menu />
  <RouterView />
</template>

<script async setup>
// componetes
import Menu from './menu/Menu.vue'
import { getGatewayApi } from '@/composables/useGateway'
import { useUserAuth } from '@/composables/useUserAuth'
import { onUpdated } from '@vue/runtime-core'
import VueElementLoading from 'vue-element-loading'
import { ref } from 'vue'

const { user } = useUserAuth()
const showLoading = ref(true)
setTimeout(async() => {
  console.log("🚀 ~ file: useUserAuth.js ~ line 7 ~ dashboard ~ user", user.value.uid)
  showLoading.value = await getGatewayApi(user.value.uid)
  console.log("🚀 ~ file: Dashboard.vue ~ line 21 ~ setTimeout ~ showLoading.value ", showLoading.value )
}, 100);

</script>

<style scoped>

</style>
