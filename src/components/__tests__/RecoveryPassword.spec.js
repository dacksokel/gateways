import {  describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import RecoveryPassword from "@/components/RecoveryPassword.vue";

describe("mount Registro components", async () => {
  it("El test pasa cuando los omponentes del Registro es verdadero", () => {
    expect(RecoveryPassword).toBeTruthy();
  });
});

describe("Hacer login con email/password", async () => {
  const wrapper = await shallowMount(RecoveryPassword);
  const email = "1@1.co";
  it("valida si existe el input de correo ", async () => {
    let input = wrapper.find('input[type="email"]');
    expect(input.exists()).toBe(true);
  });
  it("valida si el input recive correo", async () => {
    const textInput = wrapper.find('input[type="email"]');
    await textInput.setValue(email);
    expect(wrapper.find('input[type="email"]').element.value).toBe(email);
  });
    
});
