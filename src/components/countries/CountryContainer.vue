<template>
  <div class="country-container">
    <CountryFilter @update-filter="handleUpdateFilter" />

    <Suspense>
      <CountryList :filter="filter" />

      <template #fallback> Loading countries... </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CountryFilter from './CountryFilter.vue';
import CountryList from './CountryList.vue';

const filter = ref('')

const handleUpdateFilter = (filterTerm: string) => {
  filter.value = filterTerm
}
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