import { beforeEach, describe, expect, it, test } from "vitest";
import { mount, shallowMount, screen } from "@vue/test-utils";
import Login from "@/components/login.vue";
import SinginWithEmail from "@/components/Login/SinginWithEmail.vue";
import SinginWithGoogle from "@/components/Login/SinginWithGoogle.vue";
// import { firebaseConfig } from "@/firebase";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "@firebase/auth";

describe("mount Login components", async () => {
  it("El test pasa cuando los omponentes del Login estan montados", () => {
    expect(Login).toBeTruthy();
    expect(SinginWithEmail).toBeTruthy();
    expect(SinginWithGoogle).toBeTruthy();
  });
});

describe("Login ", async () => {
  it("Valida si existe la palabra login", async () => {
    const wrapper = await shallowMount(Login);
    await wrapper.get("h2");
    expect(wrapper.text()).toBe(`Login`);
  });
});

describe("Hacer login con email/password", async () => {
  const wrapper = await shallowMount(SinginWithEmail);
  const email = "1@1.co",
    password = "112365498asdasd";
  it("valida si existe el input de correo ", async () => {
    let input = await wrapper.get("#email");
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

describe("validar que existe login con google ", async () => {
  it("Valida si existe button", async () => {
      const wrapper = await shallowMount(SinginWithGoogle);
    //   expect(wrapper.exists()).toBe(true);
    expect(wrapper.get(".login-with-google-btn").exists()).toBe(true);
  });
});