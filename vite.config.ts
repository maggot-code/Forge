/*
 * @FilePath: \Forge\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-12-20 15:06:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-23 15:02:44
 * @Description: 
 */
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(mode, command, env);

    return {
        clearScreen: true,
        plugins: [vue()],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: resolve(__dirname, 'src'),
                },
                {
                    find: "forger",
                    replacement: resolve(__dirname, "lib/index.ts"),
                }
            ],
            extensions: [
                '.js',
                '.ts',
                '.jsx',
                '.tsx',
                '.json',
                '.mjs',
                '.cjs',
                '.sass',
                '.scss',
                '.less',
                '.wasm',
            ]
        },
        server: {
            hmr: true,
        },
        build: {
            lib: {
                // Could also be a dictionary or array of multiple entry points
                entry: resolve(__dirname, 'lib/index.ts'),
                name: 'Forger',
                // the proper extensions will be added
                fileName: 'forger',
            },
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                external: ['vue'],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    // vue: 'Vue',
                    globals: {},
                },
            },
        },
    }
});
