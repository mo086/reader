<script setup lang="ts">
const { t } = useI18n()
const cs = configStore()
</script>

<template>
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <RouterView />
    <van-tabbar route>
      <van-tabbar-item v-for="m in cs.getMenu" :key="m.name" :to="`/mobile/${m.name}`">
        <span>{{ t(`menu.${m.name}`) }}</span>
        <template #icon="">
          <div :class="m.icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </main>
</template>
