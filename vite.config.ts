import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const cherryPickedKeys = ['REACT_APP_BASE_API_URL']

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  // registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'antd | Vite + React + TS',
    short_name: 'antd base',
    description: 'Base react antd vite ts.',
    icons: [
      {
        src: '/manifest-icon-192.maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'monochrome'
      },
      {
        src: '/manifest-icon-512.maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/apple-icon-180.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/vite.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
        purpose: 'maskable'
      }
    ],
    theme_color: '#171717',
    background_color: '#e8ebf2',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait'
  },
  devOptions: {
    enabled: true
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const processEnv: { [key: string]: string } = {}
  cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]))

  return {
    plugins: [react(), VitePWA(manifestForPlugin)],
    server: {
      // port: 3000,
      open: true
    },
    css: {
      devSourcemap: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      outDir: 'dist'
    },
    define: {
      'process.env': processEnv
    }
  }
})
