<!--
 * @FilePath: \Forge\playground\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-12-23 15:45:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-23 17:43:59
 * @Description: 
-->
<script setup lang="ts">
import { watchEffect } from "vue";
import { todo } from "../../dist";

const { message, rise } = todo("app task");

watchEffect(() => {
    console.log(message.value);
});
</script>

<template>
    <h1>app {{ message }}</h1>
    <button @click="rise">按钮</button>
</template>

<style scoped>

</style>
