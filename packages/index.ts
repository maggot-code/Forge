/*
 * @FilePath: \Forge\packages\index.ts
 * @Author: maggot-code
 * @Date: 2022-12-26 10:39:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-26 10:48:07
 * @Description: 
 */
import { version } from "../package.json";
import { createApp } from "petite-vue";

export function container() {
    return createApp().mount(document.createElement("div"));
}

export default version;
