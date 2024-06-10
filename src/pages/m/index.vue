<script setup lang="ts">
defineOptions({
  name: 'MIndexPage',
})
const { t } = useI18n()
const data = reactive({
  activeName: 'bookshelf',
})
</script>

<template>
  <van-tabbar v-model="data.activeName">
    <van-tabbar-item name="bookshelf">
      <span>{{ t('menu.bookshelf') }}</span>
      <template #icon="">
        <div i-carbon-book />
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="bookstore">
      <span>{{ t('menu.bookstore') }}</span>
      <template #icon="">
        <div i-carbon-network-public />
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="setting">
      <span>{{ t('menu.setting') }}</span>
      <template #icon="">
        <div i-carbon-settings />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
