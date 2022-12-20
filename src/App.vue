<!--
 * @FilePath: \Forge\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-12-20 15:06:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-20 17:14:24
 * @Description: 
-->
<script setup lang="ts">
import { todo } from "forger";

const todomessage = todo("app");
</script>

<template>
    <div id="app">app {{ todomessage }}</div>
</template>

<style scoped>

</style>
