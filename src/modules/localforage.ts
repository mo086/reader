import localforage from 'localforage'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.config.globalProperties.$lf = localforage.createInstance({
    name: 'global',
    driver: localforage.INDEXEDDB,
  })
}
