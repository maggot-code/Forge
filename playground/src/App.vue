<!--
 * @FilePath: \Forge\playground\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-12-23 15:45:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2023-01-04 18:05:31
 * @Description: 
-->
<script setup lang="ts">
import { todo } from "../../dist";

const { state, add } = todo();
</script>

<template>
    <h1>App {{ state.count }}</h1>
    <button @click="add">按钮</button>
</template>

<style scoped>

</style>
