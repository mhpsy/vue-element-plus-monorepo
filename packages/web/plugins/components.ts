import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "./me-element-plus-res";

export function createComponents() {
    return Components({
        resolvers: [ElementPlusResolver()],
    })
}
