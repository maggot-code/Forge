/*
 * @FilePath: \Forge\tsup.config.ts
 * @Author: maggot-code
 * @Date: 2022-12-23 15:51:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2023-01-04 10:15:33
 * @Description: 
 */
import { defineConfig } from "tsup";

export default defineConfig((options) => {
    console.log(options);

    return {
        entry: ["packages/*.ts"],
        format: ["cjs", "esm"],
        dts: true,
        splitting: true,
        sourcemap: true,
        clean: true,
        treeshake: !options.watch,
        minify: !options.watch,
    };
});
