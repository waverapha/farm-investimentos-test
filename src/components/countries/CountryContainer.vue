<template>
  <div class="country-container">
    <CountryFilter />

    <Suspense>
      <CountryList />

      <template #fallback>
        <div class="country-list">
          <CountryCardSkeleton v-for="index in MAX_INITIAL_COUNTRIES_TO_DISPLAY" :key="index" :height="202" />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import CountryFilter from './CountryFilter.vue';
import CountryCardSkeleton from './CountryCardSkeleton.vue';
import { useCountry } from '@/composables/country'

const CountryList = defineAsyncComponent(() => import('./CountryList.vue'))

const { MAX_INITIAL_COUNTRIES_TO_DISPLAY } = useCountry()
</script>

<style lang="scss">
  .country-container {
    z-index: 5;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin: 2rem 0 0 0;

    @media (min-width: 48em) {
      $country-list-spacing: 6.75rem;

      margin: -#{$country-list-spacing} 0 0 0;
      padding: 0 clamp(2.5rem, 15vw, 13rem) $country-list-spacing clamp(2.5rem, 15vw, 13rem);
    }
  }
</style>