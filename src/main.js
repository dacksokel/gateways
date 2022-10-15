import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// imports simple alertas
import Notifications from '@kyvg/vue3-notification'
// import Firebase from './firebase'
import "./firebase";



// css globales
import "./assets/main.css";
import 'vue-universal-modal/dist/index.css';

const app = createApp(App);

app.use(router);
app.use(Notifications)

app.mount("#app");