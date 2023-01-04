/*
 * @FilePath: \Forge\packages\index.ts
 * @Author: maggot-code
 * @Date: 2022-12-26 10:39:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2023-01-04 17:33:13
 * @Description: 
 */
import { reactive } from "@vue/reactivity";

export function todo() {
    const state = reactive({
        count: 0
    });

    function add() {
        state.count++;
    }

    return {
        state,
        add
    }
}

export { }
