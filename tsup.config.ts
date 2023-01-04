/*
 * @FilePath: \Forge\tsup.config.ts
 * @Author: maggot-code
 * @Date: 2022-12-23 15:51:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2023-01-04 14:12:12
 * @Description: 
 */
import { name, version } from "./package.json";
import { defineConfig } from "tsup";

export default defineConfig((options) => {
    console.log(options);

    return {
        name: `${name} -> ${version}`,
        globalName: name,
        entry: ["packages/*.ts"],
        format: ["cjs", "esm", "iife"],
        legacyOutput: false,
        silent: false,
        dts: true,
        splitting: true,
        clean: true,
        shims: !options.watch,
        treeshake: !options.watch,
        minify: !options.watch,
        sourcemap: !!options.watch
    };
});
