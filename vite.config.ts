import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'vue',
        'vue-property-decorator',
        'vue-class-component',
      ]
    }
  },
  plugins: [
    vue(),
    AutoImport({
      dts: false,
      imports: [
        {
          'vue-property-decorator': [
            'Component',
            'Mixins',
            'Vue',
            'Emit',
            'Inject',
            'InjectReactive',
            'Model',
            'ModelSync',
            'Prop',
            'PropSync',
            'Provide',
            'ProvideReactive',
            'Ref',
            'VModel',
            'Watch',
          ],
        },
      ],
    }),
  ],
})
