<!--
 * @FilePath: \Forge\playground\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-12-23 15:45:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-27 18:05:28
 * @Description: 
-->
<script setup lang="ts">
import { useTodo } from "forge/index";

const { message, rise } = useTodo("inside");
</script>

<template>
    <h1>{{ message }}</h1>
    <button @click="rise">按钮</button>
</template>

<style scoped>

</style>
