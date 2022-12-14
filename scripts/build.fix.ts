/*
 * @FilePath: \Forge\scripts\build.fix.ts
 * @Author: maggot-code
 * @Date: 2023-01-04 10:26:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2023-01-04 14:10:32
 * @Description: 
 */
import { resolve } from 'path';
import { promises as fs } from 'fs';
import { basename } from 'path/posix';
import { fileURLToPath } from 'url';
import fg from 'fast-glob';

async function run() {
    // fix cjs exports
    const files = await fg('*.cjs', {
        ignore: ['chunk-*'],
        absolute: true,
        cwd: resolve(fileURLToPath(import.meta.url), '../../dist'),
    })
    for (const file of files) {
        console.log('[build fix]', basename(file))
        let code = await fs.readFile(file, 'utf8');
        code = code.replace('exports.default =', 'module.exports =');
        code += 'exports.default = module.exports;'
        await fs.writeFile(file, code);
    }
}

run();
