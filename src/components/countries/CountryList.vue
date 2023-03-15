<template>
  <p class="country-list__no-data-message" v-if="isCachingData">Os dados sobre Covid estão sendo compilados nesse momento, volte mais tarde por favor.</p>

  <div class="country-list" v-else>
    <CountryFilter />

    <CountryCard v-for="country in Countries" :key="country.ID" :country="country" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import CountryFilter from './CountryFilter.vue'
import CountryCard from './CountryCard.vue'

const fetchCountries = async () => {
  return (await fetch('https://api.covid19api.com/summary')).json()
}

const { Global, Countries, Message } = await fetchCountries()

const isCachingData = computed(() => Message === 'Caching in progress')
</script>

<style lang="scss">
.country-list {
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0 0 0;
  padding: 0 1rem;

  @media (min-width: 48em) {
    margin: -6.75rem 0 0 0;
    padding: 0 clamp(2.5rem, 15vw, 13rem);
  }

  &__no-data-message {
    text-align: center;
  }
}
</style>
