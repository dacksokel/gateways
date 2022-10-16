import { ref } from "vue";
import { genMacs, genSingleIp } from "@/helpers/GenMAcsIps.js";
import { notify } from "@kyvg/vue3-notification";

const gateway = ref({
  id: genMacs(),
  name: "GatewayDefault",
  ipv4: genSingleIp(0),
  devices: [
    {
      id: 1,
      vendor: "dispositivo 1",
      creation: new Date(),
      status: false,
    },
    {
      id: 2,
      vendor: "dispositivo 2",
      creation: new Date(),
      status: true,
    },
    {
      id: 3,
      vendor: "dispositivo 3",
      creation: new Date(),
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

  guardarDatosGateway();

  notify({
    type: "success",
    title: "imagen",
    text: `Se a guardados la imagen exitosamente`,
  });
};

const guardarDatosGateway = async (name, ipv4) => {
  let ip = ipv4 ? ipv4 : gateway.value.ipv4;
  
  if (validIpv4(ip)) {
    gateway.value.name = name ? name : gateway.value.name;
    gateway.value.ipv4 = ip;
    const dato = await fetch(
      `http://192.168.32.100:6006/gateway/updategateway`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gateway.value),
      }
    );
    let res = await dato.json();
    if (res.status) {
      notify({
        type: "success",
        title: "Gateway",
        text: `Se a guardados los cambios exitosamente`,
      });
    }
  }
};

const editDevices = ()=>{
  guardarDatosGateway();
  notify({
    type: "success",
    title: "Actualizado el Dispositivo",
    text: `Se a actualizado un dispositivo exitosamente`,
  });
}
const addDevice = async (device) => {
  if (gateway.value.devices.length < 10 && device.vendor != "") {
    gateway.value.devices.push(device);
    guardarDatosGateway();
    notify({
      type: "success",
      title: "Argegado Dispositivo",
      text: `Se a agregado un dispositivo exitosamente`,
    });
    return true;
  }
  if (!device.vendor) {
    notify({
      type: "error",
      title: "Error Agregar Dispoistivo",
      text: `debe completar los datos`,
    });
    return false;
  }
  notify({
    type: "error",
    title: "Error Agregar Dispoistivo",
    text: `Se a llegado al maximo de dispositivos a conectar`,
  });
  return false;
};

const deleteDevice = (deviceId) => {
  gateway.value.devices = gateway.value.devices.filter(
    (n) => n.id !== deviceId
  );
  guardarDatosGateway();
  notify({
    type: "success",
    title: "Dispositivo Eliminado",
    text: `Se a eliminado un dispositivo correctamente `,
  });
};

const validIpv4 = (ip) => {
  /**
   * las ips que son validas son las siguientes
   * 10.0.0.0/8	[10.0.0.0–10.255.255.255]		Red privada	Utilizado para las comunicaciones locales dentro de una red privada.
   * 192.168.0.0/16	[192.168.0.0–192.168.255.255]	Red privada	Utilizado para las comunicaciones locales dentro de una red privada
   */
  let ipv4 = ip;
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

export const getGatewayApi = async (uid) => {
  const dato = await fetch(`http://192.168.32.100:6006/gateway/creategateway`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uid: uid }),
  });
  if (dato) {
    let res = await dato.json();
    gateway.value = res.gateway;
    return false;
  }
  return true;
};

export const useGateway = () => {
  return {
    gateway,
    cambiarImg,
    guardarDatosGateway,
    addDevice,
    deleteDevice,
    getGatewayApi,
    editDevices
  };
};
