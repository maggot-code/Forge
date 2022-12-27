/*
 * @FilePath: \Forge\playground\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-12-23 15:45:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-27 18:07:55
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: 'forge',
                replacement: '/src/../../packages'
            }
        ]
    },
    server: {
        hmr: true
    },
    optimizeDeps: {
        force: true,
    }
});
