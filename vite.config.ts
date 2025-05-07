import { defineConfig, loadEnv, UserConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig(async(config): Promise<UserConfig> => {
  const unocss = await import('unocss/vite').then(i => i.default)
  const { mode } = config;
  const env = loadEnv(mode, __dirname, ['K', 'VITE'])
  const { VITE_PUBLIC_PATH, VITE_PORT, K_BASE_URL } = env
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      uni(),
      unocss(),
      Components({
        dts: true,
        deep: false, // 深度扫描组件目录
        dirs: [
          'src/components',
          'src/widgets'
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
