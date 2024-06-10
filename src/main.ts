import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'

import { routes } from 'vue-router/auto-routes'
import { createMemoryHistory, createWebHashHistory } from 'vue-router'
import { isClient } from '@vueuse/core'
import App from './App.vue'

import type { UserModule } from './types'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

export const createApp = ViteSSG(
  App,
  {
    history: isClient ? createWebHashHistory(import.meta.env.BASE_URL) : createMemoryHistory(import.meta.env.BASE_URL),
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true })).forEach(i => i.install?.(ctx))
  },
)
