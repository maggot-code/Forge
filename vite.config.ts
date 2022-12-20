/*
 * @FilePath: \Forge\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-12-20 15:06:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-20 16:09:13
 * @Description: 
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(mode, command);

    return {
        plugins: [vue()],
    }
});
