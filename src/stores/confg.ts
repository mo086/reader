import { defineStore } from 'pinia'
// @unocss-include
export const configStore = defineStore('alerts', () => {
  const config = reactive({
    menu: [
      { name: 'bookshelf', icon: 'i-carbon-book' },
      { name: 'bookstore', icon: 'i-carbon-network-public' },
      { name: 'setting', icon: 'i-carbon-settings' },
    ],
  })
  const getMenu = computed(() => config.menu)
  const getDefaultMenu = computed(() => config.menu[0])
  return { config, getMenu, getDefaultMenu }
})
