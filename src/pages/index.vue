<script setup lang="ts">
import { isClient } from '@vueuse/core'

if (isClient)
  useRouter().push(window.innerHeight > window.innerWidth ? `/mobile/${configStore().getDefaultMenu.name}` : `/desktop/${configStore().getDefaultMenu.name}`)
</script>

<template>
  <RouterView />
</template>
