<template>
  <vue-element-loading :active="showLoading" :is-full-screen="true" background-color="rgba(255, 255, 255, 2)"
    text="Cargando" size="155" />
  <Menu />
  <RouterView />
</template>

<script async setup>
// componetes
import Menu from './menu/Menu.vue'
import { getGatewayApi } from '@/composables/useGateway'
import { useUserAuth } from '@/composables/useUserAuth'
import VueElementLoading from 'vue-element-loading'
import { ref } from 'vue'

const { user } = useUserAuth()
const showLoading = ref(true)
/***este timeout no me gusta pero es la unica forma rapida y sencilla que se me ocurrio */
setTimeout(async () => {
  showLoading.value = await getGatewayApi(user.value.uid)
}, 100);

</script>

<style scoped>

</style>
