import { ref } from "vue";
import { genMacs, genSingleIp } from "@/helpers/GenMAcsIps.js";
import { useUserAuth } from "@/composables/useUserAuth";

const { user } = useUserAuth();

const gateway = ref({
  id: genMacs(),
  name: "GatewayDefault",
  ipv4: genSingleIp(0),
  devices: [
    {
      id: genMacs(),
      vendor: "dispositivo 1",
      creation: new Date("Jul 12 2022"),
      status: "Online",
    },
    {
      id: genMacs(),
      vendor: "dispositivo 2",
      creation: new Date("Jul 12 2022"),
      status: "Online",
    },
    {
      id: genMacs(),
      vendor: "dispositivo 3",
      creation: new Date("Jul 12 2022"),
      status: "Offline",
    },
  ],
  img: "https://www.3cx.es/wp-content/uploads/sites/19/beroNet-gateways-voip-min-300x125.png",
});

export function useGateway() {
  const cambiarImg = () => {
    console.log("cambiando imagen");
  };

  const guardarDatosGateway = ()=>{
    console.log(`guardando todos los cambbios`)
  }
  return {
    gateway,
    cambiarImg,
    guardarDatosGateway
  };
}
