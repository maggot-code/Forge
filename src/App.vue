<!--
 * @FilePath: \Forge\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-12-20 15:06:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-23 15:00:42
 * @Description: 
-->
<script setup lang="ts">
import { watchEffect } from "vue";
// import { todo } from "forger";
import { todo } from "../dist/forger.js";

const { rise, msg } = todo("app");

function add() {
    rise();
}

watchEffect(() => {
    console.log(msg);
});
</script>

<template>
    <div id="app">app {{ msg }}</div>
    <button @click="add">按钮</button>
</template>

<style scoped>

</style>
