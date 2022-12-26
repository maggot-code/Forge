/*
 * @FilePath: \Forge\packages\index.ts
 * @Author: maggot-code
 * @Date: 2022-12-26 10:39:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-26 14:04:48
 * @Description: 
 */
import { version } from "../package.json";
import { ref, computed, effect } from "@vue/reactivity";

export function todo(handler: string) {
    const record = ref(0);
    const message = computed(() => {
        return `todo ${handler} (record:${record.value})`;
    });
    function promote() {
        record.value += 1;
    }

    effect(() => {
        if (record.value > 10) record.value = 0;
    });
    return {
        message,
        promote
    }
}

export default {
    version
};
