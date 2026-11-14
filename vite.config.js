import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 使用相對路徑 base: './' 可無縫相容 GitHub Pages 與各類靜態託管環境，避免子目錄路由資源 404
  base: './',
});
