import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv, UserConfigFnObject} from 'vite'
import createVitePlugins from "./plugins";
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssPresetsEnv from 'postcss-preset-env'

const returnUserConfigFnObject: UserConfigFnObject =
  (
    {mode, command}
  ) => {
    const env = loadEnv(mode, process.cwd())
    const {VITE_APP_ENV} = env
    const isBuild = command === "build"//是不是打包~
    return {
      base: VITE_APP_ENV === "test" ? "/test" : "/",
      plugins: createVitePlugins(env, isBuild),
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      define: {
        __VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
        __VUE_I18N_LEGACY_API__: JSON.stringify(false),
        __VUE_I18N_PROD_DEVTOOLS__: JSON.stringify(false),
      },
      css: {
        postcss: {
          plugins: [
            tailwindcss,
            autoprefixer,
            postcssPresetsEnv({
              browsers: ['> 0.2% and not dead']
            }),
          ]
        }
      },
      server: {
        port: 80,
        host: true,
        proxy: {
          '/api': {
            target: 'http://localhost:8080',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
      }
    }
  }
// https://vitejs.dev/config/
export default defineConfig(returnUserConfigFnObject)
