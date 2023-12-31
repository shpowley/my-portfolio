import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// COMMENTS:
// - I don't really understand "defineConfig"
// - I copied over the contents use-video/vite.config.js for the most part
// * also moved index.html to /src, updating the paths in index.html
export default defineConfig({
  root: 'src/',
  publicDir: '../public/',
  base: './',
  plugins:
  [
      // React support
      react(),

      // .js file support as if it was JSX
      {
          name: 'load+transform-js-files-as-jsx',
          async transform(code, id)
          {
              if (!id.match(/src\/.*\.js$/))
                  return null

              return transformWithEsbuild(code, id, {
                  loader: 'jsx',
                  jsx: 'automatic',
              });
          },
      },
  ],
  server:
  {
      host: true, // Open to local network and display URL
      open: true
  },
  build:
  {
      outDir: '../dist', // Output in the dist/ folder
      emptyOutDir: true, // Empty the folder first
      sourcemap: true, // Add sourcemap
      minify: true, // Minify code
      target: 'esnext', // Use ESNext
  },
})
