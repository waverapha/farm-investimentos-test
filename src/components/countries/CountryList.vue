<template>
  <BaseCard class="country-list__no-data-message" v-if="isCachingData">
    Os dados sobre Covid estão sendo compilados nesse momento, volte mais tarde por favor.
  </BaseCard>

  <div class="country-list" v-else>
    <CountryCard v-for="country in filteredCountries" :key="country.ID" :country="country" />
  </div>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue';
import CountryCard from './CountryCard.vue'
import { useCountry } from '@/composables/country'

const { filteredCountries, getCountries, isCachingData } = useCountry()

await getCountries()
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
