<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()
const localeVal = locale.value
</script>

<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink icon-btn to="/" :title="t('button.home')">
      <div i-carbon-campsite />
    </RouterLink>

    <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <el-select
      v-model="localeVal"
      filterable
      style="width: 100px"
      @change="(val: string) => loadLanguageAsync(val)"
    >
      <el-option
        v-for="item in availableLocales"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>

    <a icon-btn rel="noreferrer" href="https://github.com/mo086/reader" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
