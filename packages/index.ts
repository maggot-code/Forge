/*
 * @FilePath: \Forge\packages\index.ts
 * @Author: maggot-code
 * @Date: 2022-12-26 10:39:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-27 18:02:11
 * @Description: 
 */
import type { App } from "vue";
import { unref, effectScope, ref, computed, watchEffect } from "vue";
// import { version } from "../package.json";

export type CreateGlobalStateReturn<T> = () => T;

export function createGlobalState<T>(stateFactory: () => T): CreateGlobalStateReturn<T> {
    let initialized = false;
    let state: T;
    const scope = effectScope(true);

    return () => {
        if (!initialized) {
            state = scope.run(stateFactory) as T;
            initialized = true;
        }
        return state;
    }
}

export function useTodo(handler: string) {
    const record = ref(0);
    const message = computed(() => {
        return `app ${handler} record:${unref(record)}`;
    });
    function rise() {
        record.value += 1;
    }

    return {
        message,
        rise
    }
}

export default (app: App) => {
    console.log(app);
}
