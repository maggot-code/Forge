/*
 * @FilePath: \Forge\playground\src\main.ts
 * @Author: maggot-code
 * @Date: 2022-12-23 15:45:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-27 18:04:20
 * @Description: 
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Forge from "forge/index";

createApp(App).use(Forge).mount('#app');
