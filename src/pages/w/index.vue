<script setup lang="ts">
defineOptions({
  name: 'WIndexPage',
})
const { t } = useI18n()
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu default-active="bookshelf">
          <el-menu-item index="bookshelf">
            <el-icon><div i-carbon-book /></el-icon>
            <span>{{ t('menu.bookshelf') }}</span>
          </el-menu-item>
          <el-menu-item index="bookstore">
            <el-icon><div i-carbon-network-public /></el-icon>
            <span>{{ t('menu.bookstore') }}</span>
          </el-menu-item>
          <el-menu-item index="setting">
            <el-icon><div i-carbon-settings /></el-icon>
            <span>{{ t('menu.setting') }}</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-main>
        <el-scrollbar />
      </el-main>
    </el-container>
  </el-container>
</template>
