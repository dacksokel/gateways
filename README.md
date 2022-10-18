# Frontend gateways

## Este proyecto esta anclado en firebase usando los siguientes recursos de dicha plataforma:

### Storage
### Firebase Funtions
### Firebase Database
### Firebase Hosting
### Firebase Auth
### Firebase Admin (SDK)

Para instalar este repositorio solo necesita hacer 

```sh
npm install 
```
## Tambien puede hacer par aque se instalen los repositorios y versiones que se uso en el proyecto

```sh
npm ci
```

### Una vez instalado puede hacer uso del

```sh
npm run dev
```

### Para desplegar en el modo produccion debe hacer previamente este comando,
### tambien puede ver la demo del mismo en https://prueba-dacksokel.web.app

```sh
npm run build
```

### Para ejecutar las pruebas tanto unitaras como las de end to end puede ejecutar los siguientes comandos [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

