/*
 * @FilePath: \Forge\lib\index.ts
 * @Author: maggot-code
 * @Date: 2022-12-20 15:56:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-23 13:25:35
 * @Description: 
 */
import { ref, computed, effect } from "@vue/reactivity";

export function todo(handler: string) {
    const val = ref(0);
    const msg = computed(() => `${handler} todo..${val.value}`);
    function rise() {
        val.value++;
    }

    effect(() => {
        if (val.value > 10) {
            val.value = 0;
        }
    });
    return { msg, rise };
}
