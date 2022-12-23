/*
 * @FilePath: \Forge\tsup.config.ts
 * @Author: maggot-code
 * @Date: 2022-12-23 15:51:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-23 15:55:01
 * @Description: 
 */
import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./packages/**/*.ts"],
    format: ["esm", "cjs"],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    treeshake: true
});
