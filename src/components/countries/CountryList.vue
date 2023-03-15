<template>
  <p class="country-list__no-data-message" v-if="isCachingData">Os dados sobre Covid estão sendo compilados nesse momento, volte mais tarde por favor.</p>

  <div class="country-list" v-else>
    <CountryCard v-for="country in countries" :key="country.ID" :country="country" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import CountryCard from './CountryCard.vue'
import type { Country } from '@/types/country';

export interface Props {
  filter: string
}

const props = defineProps<Props>()

const MAX_COUNTRIES_TO_DISPLAY = 5

const fetchCountries = async () => (await fetch('https://api.covid19api.com/summary')).json()

const { Countries: allCountries, Message }: { Countries: Country[], Message: string } = await fetchCountries()

const filteredCountries = computed(() => {
  if(!props.filter){
    return allCountries
  }

  return allCountries
    .filter((country) => country.Country.toLowerCase().includes(props.filter.toLowerCase()))
})

const countries = computed(() => filteredCountries.value.slice(0, MAX_COUNTRIES_TO_DISPLAY))
const isCachingData = computed(() => Message === 'Caching in progress')
</script>

<style lang="scss">
.country-list {
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__no-data-message {
    text-align: center;
  }
}
</style>
