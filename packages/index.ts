/*
 * @FilePath: \Forge\packages\index.ts
 * @Author: maggot-code
 * @Date: 2022-12-23 15:35:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-23 17:57:02
 * @Description: 
 */
import { ref, computed, effect } from "@vue/reactivity";

export function todo(handler: string) {
    const record = ref(0);
    const message = computed(() => {
        return `You have ${record.value} ${handler} to do`;
    });

    function rise() {
        record.value++;
    }

    effect(() => {
        if (record.value > 10) record.value = 0;
    });

    return {
        message,
        rise
    };
}
