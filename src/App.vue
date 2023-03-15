<template>
  <BaseHeader />
  <main class="b-main flex-container flex-container--column">
    <BaseBanner />
    <CountryContainer />
  </main>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/base/BaseHeader.vue'
import BaseBanner from '@/components/base/BaseBanner.vue'
import CountryContainer from '@/components/countries/CountryContainer.vue'
</script>

