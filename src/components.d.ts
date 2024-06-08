export {}

declare module 'vue' {
  export interface GlobalComponents {
    README: typeof import('./components/README.md')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    TheFooter: typeof import('./components/TheFooter.vue')['default']
  }
}
