import vue from "@vitejs/plugin-vue"

import createCompression from "./compression"
import {createHtmlPlugin} from "./vite-plugin-html"
import {createJsxPlugin} from "./jsx"
import {createAutoImport} from "./auto-import";
import {createComponents} from "./components";

/**
 * 日期 : 2023年11月17日
 * 哥们实在无法配置上 自动导入 obj
 * 后续在配置 大概率要重写一个类似ElementPlusResolver这样的东西 只要从element-plus里引入就好
 */

export default function createVitePlugins(viteEnv: any, isBuild: boolean = false) {
  const vitePlugins = [
    vue(),
    createHtmlPlugin(viteEnv),
    createJsxPlugin(),
    // createAutoImport(),
    // createComponents()
  ]
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
