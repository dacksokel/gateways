import { describe, expect, it } from "vitest";
// import { mount, shallowMount, screen } from "@vue/test-utils";
import GatewayConfig from "@/components/GatewayConfig.vue";
import { useGateway } from "@/composables/useGateway";
const { gateway, getGatewayApi, addDevice, deleteDevice } = useGateway();

describe("mount Registro components", async () => {
  it("El test pasa cuando los omponentes del Registro es verdadero", () => {
    expect(GatewayConfig).toBeTruthy();
  });
});
describe("Gateway", () => {
  it("pasa si regresa falso ya que no se le esta pasando el uid correcto", async () => {
    let res = await getGatewayApi("uidusuario");
    expect(res).toBe(false);
  });
  it("pasa si trae un se settea un gateway de prueba", async () => {
    gateway.value = {
      id: "12312321",
      name: "prueba unitaria",
      ipv4: "192.0.0.1",
      devices: [],
      img: "sin imagenes",
    };
    expect(gateway.value.name === "prueba unitaria").toBe(true);
  });

  it("pasa si gateway dispositivo es mayor a 0", async () => {
    let dispositivo = {
      id: 1,
      status: false,
      vendor: "pruebas unitarias",
      creation: Date.now(),
    };
    let res = await addDevice(dispositivo);
    expect(gateway.value.devices.length > 0).toBe(true);
  });

  it("pasa si gateway los gateways son borrados", async () => {
    let res = await deleteDevice(1);
    console.log(
      "🚀 ~ file: GatewayConfig.spec.js ~ line 45 ~ it ~ gateway",
      gateway.value.devices
    );
    expect(gateway.value.devices.length === 0).toBe(true);
  });
});
