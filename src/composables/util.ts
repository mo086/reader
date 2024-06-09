export function global() {
  return getCurrentInstance()?.appContext.config.globalProperties
}
