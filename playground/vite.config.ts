/*
 * @FilePath: \Forge\playground\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-12-23 15:45:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-26 13:25:07
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        hmr: true
    },
    optimizeDeps: {
        force: true,
    }
});
