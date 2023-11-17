import AutoImport from 'unplugin-auto-import/vite'
import {ElementPlusResolver} from "./me-element-plus-res";

export function createAutoImport() {
  console.log(ElementPlusResolver.toString())
  return AutoImport({
    resolvers: [ElementPlusResolver()],
  })
}
