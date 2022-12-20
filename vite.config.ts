/*
 * @FilePath: \Forge\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-12-20 15:06:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-20 15:10:36
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
})
