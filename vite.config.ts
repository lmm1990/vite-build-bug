import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, join } from 'path'
import { globSync } from 'glob'

const assetsPath = (path: string) => {
  return join('static', path)
}

const getEntryPath = () => {
  const pageEntry: Record<string, string> = {}
  globSync('./src/views/**/index.html').forEach((entry: string) => {
    const pathArr: string[] = entry.split('\\')
    let name: string = pathArr[pathArr.length - 2]
    if (name == 'views') {
      name = ''
    }
    pageEntry[name] = join(process.cwd(), `/src/views/${name}/index.html`)
  })
  return pageEntry
}

// https://vitejs.dev/config/
export default defineConfig({
  root: './src/views',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: resolve(process.cwd(), 'dist'), // 指定输出路径（相对于 项目根目录)
    sourcemap: false, // 构建后是否生成 source map 文件
    chunkSizeWarningLimit: 1500, // 规定触发警告的 chunk(文件块) 大小
    assetsDir: 'static',
    minify: 'esbuild',
    rollupOptions: {
      // 自定义底层的 Rollup 打包配置
      input: getEntryPath(),
      output: {
        entryFileNames: assetsPath('js/[name][hash].js'),
        chunkFileNames: assetsPath('js/[name][hash].js'),
        assetFileNames: assetsPath('assets/[name][hash].[ext]'),
        compact: true,
        manualChunks: (id: string) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString() // 拆分多个vendors
          }
        }
      }
    },
    emptyOutDir: true
  }
})
