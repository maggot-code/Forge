/*
 * @FilePath: \Forge\tsup.config.ts
 * @Author: maggot-code
 * @Date: 2022-12-23 15:51:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-28 18:14:31
 * @Description: 
 */
import { defineConfig } from "tsup";

export default defineConfig((options) => {
    console.log(options);

    return {
        entry: ["./packages/**/*.ts"],
        format: ["esm", "cjs"],
        dts: true,
        splitting: true,
        sourcemap: true,
        clean: true,
        treeshake: true,
        minify: !options.watch,
    };
});
