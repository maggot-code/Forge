<!--
 * @FilePath: \Forge\playground\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-12-23 15:45:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-26 13:47:49
 * @Description: 
-->
<script setup lang="ts">
import { ref, computed, watchEffect, toRef } from "vue";
import { todo } from "../../dist/index";

function insideTodo(handler: string) {
    const record = ref(0);
    const message = computed(() => {
        return `todo ${handler} (record:${record.value})`;
    });
    function promote() {
        record.value++;
    }

    watchEffect(() => {
        if (record.value > 10) record.value = 0;
    });
    return {
        message,
        promote
    }
}

const { promote, message } = todo("app");
const msg = toRef(message, "value");

// const { promote, message } = insideTodo("app inside");
</script>

<template>
    <!-- <input type="text" /> -->
    <h1>{{ message }}</h1>
    <h1>{{ msg }}</h1>
    <button @click="promote">按钮</button>
</template>

<style scoped>

</style>
