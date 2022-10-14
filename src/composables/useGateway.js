import { ref, reactive, toRefs, readonly } from "vue";
import { genMacs, genSingleIp } from "@/helpers/GenMAcsIps.js";

export function useGateway() {
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

  return {
    gateway,
  };
}
