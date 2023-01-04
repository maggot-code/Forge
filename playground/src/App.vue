<!--
 * @FilePath: \Forge\playground\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-12-23 15:45:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2023-01-04 13:23:17
 * @Description: 
-->
<script setup lang="ts">
import { useTodo } from "../../dist";

const todo = useTodo();
console.log(todo);
</script>

<template>
    <h1>App</h1>
    <!-- <button @click="rise">按钮</button> -->
    <button>按钮</button>
</template>

<style scoped>

</style>
