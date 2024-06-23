<script setup lang="ts">
useHead({
  title: 'Reader',
  meta: [
    {
      name: 'description',
      content: 'Opinionated Vite Starter Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
