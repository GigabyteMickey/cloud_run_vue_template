import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 使用 `mode` 参数来访问当前的构建模式
  console.log(`Current build mode: ${mode}`);

  return {
    plugins: [vue()],
    base: mode === 'production' ? '/production-sub-path/' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000, // 開發伺服器端口
      open: true, // 自動打開瀏覽器
      proxy: {
        // 代理 API 請求到另一個伺服器
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      sourcemap: mode === 'development', // 開發模式下啟用源映射
      outDir: 'dist', // 修改輸出目錄
    },
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
  };
});
