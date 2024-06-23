<script setup lang="ts" xmlns:v-for="http://www.w3.org/1999/html">
const { t } = useI18n()

const cs = configStore()
</script>

<template>
  <el-container>
    <el-aside>
      <el-scrollbar>
        <el-menu :router="true" :default-active="cs.getDefaultMenu.name">
          <el-menu-item v-for="m in cs.getMenu" :key="m.name" :index="m.name" :route="`/desktop/${m.name}`">
            <el-icon>
              <div :class="m.icon" />
            </el-icon>
            <span>{{ t(`menu.${m.name}`) }}</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>
