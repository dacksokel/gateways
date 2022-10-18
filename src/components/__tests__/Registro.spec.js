import { beforeEach, describe, expect, it, test } from "vitest";
import { mount, shallowMount, screen } from "@vue/test-utils";
import Registro from "@/components/Registro.vue";


describe("mount Registro components", async () => {
  it("El test pasa cuando los omponentes del Registro es verdadero", () => {
    expect(Registro).toBeTruthy();
  });
});


describe("Hacer login con email/password", async () => {
  const wrapper = await shallowMount(Registro);
  const email = "1@1.co",
    password = "112365498asdasd";
  it("valida si existe el input de correo ", async () => {
    let input = wrapper.find('input[type="email"]');;
    expect(input.exists()).toBe(true);
  });
  it("valida si el input recive correo", async () => {
    const textInput = wrapper.find('input[type="email"]');
    await textInput.setValue(email);
    expect(wrapper.find('input[type="email"]').element.value).toBe(email);
  });
  it("valida si existe el input de password ", async () => {
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
  });
  it("valida si el input recive correo", async () => {
    const textInput = wrapper.find('input[type="password"]');
    await textInput.setValue(password);
    expect(wrapper.find('input[type="password"]').element.value).toBe(password);
  });
});
