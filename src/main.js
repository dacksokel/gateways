import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import Firebase from './firebase'
import "./firebase/index";
// css globales
import "./assets/main.css";



const app = createApp(App);

app.use(router);

app.mount("#app");
