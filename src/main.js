import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// imports simple alertas
import Notifications from '@kyvg/vue3-notification'
// import Firebase from './firebase'
import "./firebase";
import VueElementLoading from 'vue-element-loading'



// css globales
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(Notifications)
app.use(VueElementLoading)

app.mount("#app");