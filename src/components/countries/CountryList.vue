<template>
  <p class="country-list__no-data-message" v-if="isCachingData">Os dados sobre Covid estão sendo compilados nesse momento, volte mais tarde por favor.</p>

  <template v-else>
    <CountryFilter />

    <CountryCard v-for="country in Countries" :key="country.ID" :country="country" />
  </template>
</template>

<script lang="ts" setup>
import CountryFilter from './CountryFilter.vue'
import CountryCard from './CountryCard.vue'
import { computed } from 'vue';

const fetchCountries = async () => {
  return (await fetch('https://api.covid19api.com/summary')).json()
}

const { Global, Countries, Message } = await fetchCountries()

const isCachingData = computed(() => Message === 'Caching in progress')
</script>

<style lang="scss">
.country-list {
  &__no-data-message {
    text-align: center;
  }
}
</style>
