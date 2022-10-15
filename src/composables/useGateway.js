import { isVNode, onUnmounted, ref } from "vue";
import { genMacs, genSingleIp } from "@/helpers/GenMAcsIps.js";
// import { useUserAuth } from "@/composables/useUserAuth";
import { notify } from "@kyvg/vue3-notification";

// const { user } = useUserAuth();

const gateway = ref({
  id: genMacs(),
  name: "GatewayDefault",
  ipv4: genSingleIp(0),
  devices: [
    {
      id: 1,
      vendor: "dispositivo 1",
      creation: new Date("Jul 12 2022"),
      status: false,
    },
    {
      id: 2,
      vendor: "dispositivo 2",
      creation: new Date("Jul 12 2022"),
      status: true,
    },
    {
      id: 3,
      vendor: "dispositivo 3",
      creation: new Date("Jul 12 2022"),
      status: false,
    },
  ],
  img: "https://www.3cx.es/wp-content/uploads/sites/19/beroNet-gateways-voip-min-300x125.png",
});

const cambiarImg = (event) => {
  gateway.value.img = event.target.files[0];
  console.log(
    "🚀 ~ file: useGateway.js ~ line 37 ~ cambiarImg ~ event.target.files[0]",
    event.target.files[0]
  );
  console.log("cambiando imagen ", gateway.value.img);
};

const guardarDatosGateway = () => {
  if (validIpv4()) {
    console.log(`guardando todos los cambbios`);
  }
};

const addDevice = (device) => {
  if(gateway.value.devices.length < 10){
    gateway.value.devices.push(device);
    notify({
      type: "success",
      title: "Argegado Dispositivo",
      text: `Se a agregado un dispositivo exitosamente`,
    });  
    return
  }
  notify({
    type: "error",
    title: "Error Agregar Dispoistivo",
    text: `Se a llegado al maximo de dispositivos a conectar`,
  });
};

const deleteDevice = (deviceId)=>{    
  // console.log('delete device en la posicion ',deviceId)
  gateway.value.devices = gateway.value.devices.filter(n=> n.id !== deviceId)  
  notify({
    type: "sucess",
    title: "Dispositivo Eliminado",
    text: `Se a eliminado un dispositivo correctamente `,
  });
}

const validIpv4 = () => {
  /**
   * las ips que son validas son las siguientes
   * 10.0.0.0/8	[10.0.0.0–10.255.255.255]		Red privada	Utilizado para las comunicaciones locales dentro de una red privada.
   * 192.168.0.0/16	[192.168.0.0–192.168.255.255]	Red privada	Utilizado para las comunicaciones locales dentro de una red privada
   */
  let { ipv4 } = gateway.value;
  ipv4 = ipv4.split(".");
  let p1 = ipv4.some(
    (n, index, ipv4) => index == 1 && n === "168" && ipv4[index - 1] === "192"
  );

  if (p1 && ipv4[2] <= 255 && ipv4[3] <= 255) {
    return p1;
  }

  notify({
    type: "error",
    title: "Error IpV4",
    text: `la ip debe tener 192.168.xxx.xxx donde x < 255 `,
  });
  return false;
};

export const useGateway = () => {
  return {
    gateway,
    cambiarImg,
    guardarDatosGateway,
    addDevice,
    deleteDevice
  };
};
