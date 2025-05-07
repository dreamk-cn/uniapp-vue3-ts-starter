import path from 'node:path'
import { defineConfig, loadEnv, UserConfig } from "vite";
import Uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig(async(config): Promise<UserConfig> => {
  const Unocss = await import('unocss/vite').then(i => i.default)
  const { mode } = config;
  const env = loadEnv(mode, __dirname, ['K', 'VITE'])
  const { VITE_PUBLIC_PATH, VITE_PORT, K_BASE_URL } = env
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      Uni(),
      Unocss(),
      Components({
        dts: true,
        deep: true, // 深度扫描组件目录
        dirs: [
          'src/components',
        ],
      }),
      AutoImport({
        imports: [
          'vue',
          'uni-app',
          'pinia',
        ],
        dts: true,
        dirs: [
          './src/hooks',
          './src/store',
        ],
        vueTemplate: true,
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: Number(VITE_PORT || 5173),
      proxy: {
        '/api': {
          target: K_BASE_URL,
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, './src'),
        },
      ],
    },
  }
});
