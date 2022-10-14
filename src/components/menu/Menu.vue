<template>
    <nav class="nav">
        <ul>
            <li><RouterLink :to="{name:'status'}">Status</RouterLink></li>
            <li><RouterLink :to="{name:'config'}">Configuracion</RouterLink>
                <ul>
                    <li><a href="#">Gateway</a></li>
                    <li><a href="#">Agregar Dispositivos</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul></li>
            <!-- <li>
                <a href="#">Codes</a>
                <ul>
                    <li><a href="#">HTML 5</a></li>
                    <li><a href="#">CSS 3</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Projects</a>
                <ul>
                    <li><a href="#">Project 1</a></li>
                    <li><a href="#">Project 2</a></li>
                    <li><a href="#">Project 3</a></li>
                </ul>
            </li>
            <li><a href="#">Contact</a></li> -->
            <li><button @click="logout">Logout</button></li>
        </ul>
    </nav>
</template>

<script setup>

import { getAuth, signOut } from "@firebase/auth";
import { useRouter } from 'vue-router'
const auth = getAuth()
const router = useRouter()

const logout = async () => {
    try {
        await signOut(auth);
        console.log("signup out");
        router.push("/");
    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped>
.nav {
    width: 1100px;
    height: 60px;
    margin: 0 auto;
    border-radius: 5px;
}

ul li {
    list-style: none;
    width: 200px;
    line-height: 60px;
    position: relative;
    background: #222;
    box-shadow: 0px 2px 5px 0px grey;
    text-align: center;
    float: left;
    background-color: #010000;
}

ul li ul {
    position: absolute;
}

.nav>ul>li:nth-of-type(1) {
    border-radius: 5px 0px 0px 5px;
}

.nav>ul>li:nth-of-type(5) {
    border-radius: 0px 5px 5px 0px;
}

ul li a {
    color: #fff;
    width: 200px;
    height: 58px;
    display: inline-block;
    text-decoration: none;
}

ul li a:hover {
    font-weight: bold;
    border-bottom: 2px solid #fff;
}

ul li ul {
    display: none;
}

.nav ul li:hover ul {
    display: block;
}

.fa {
    margin-right: 5px;
}

.container {
    width: 1000px;
    height: 200px;
    margin: 0 auto;
    padding: 20px 20px;
}
</style>
