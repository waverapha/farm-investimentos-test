<template>
  <BaseHeader />
  <main class="b-main flex-container flex-container--column">
    <BaseBanner />
    <Suspense>
      <CountryList />

      <template #fallback> Loading countries... </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import BaseHeader from './components/base/BaseHeader.vue'
import BaseBanner from './components/base/BaseBanner.vue'
import CountryList from './components/countries/CountryList.vue'
</script>

<style lang="scss">
.b-main {
}
</style>
