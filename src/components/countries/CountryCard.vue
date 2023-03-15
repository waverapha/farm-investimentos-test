<template>
  <BaseCard class="country-card" tag="article">
    <h3 class="country-card__title">{{ country.Country }}</h3>

    <dl class="country-card__informations">
      <div>
        <dt class="country-card__term">Total de casos</dt>
        <dd class="country-card__definition">{{ totalConfirmedCases }}</dd>
      </div>
      
      <div>
        <dt class="country-card__term">Mortes</dt>
        <dd class="country-card__definition">{{ totalConfirmedDeaths }}</dd>
      </div>

      <div>
        <dt class="country-card__term">Fatalidade</dt>
        <dd class="country-card__definition">{{ fatality }}%</dd>
      </div>
    </dl>
  </BaseCard>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import BaseCard from '@/components/base/BaseCard.vue';
import type { Country } from '@/types/country'

export interface Props {
  country: Country
}

const props = defineProps<Props>()

const totalConfirmedCases = computed(() => new Intl.NumberFormat().format(props.country.TotalConfirmed))
const totalConfirmedDeaths = computed(() => new Intl.NumberFormat().format(props.country.TotalDeaths))
const fatality = computed(() => ((props.country.TotalDeaths / props.country.TotalConfirmed) * 100).toFixed(2))
</script>

<style lang="scss">
  .country-card {
    padding: 1.5rem 4.5rem 2.75rem 4.5rem;
    text-align: center;

    &__informations {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      margin: 0 0 1rem 0;
      font-size: 1.75rem;
    }

    &__term {
      margin: 0 0 0.75rem 0;
    }

    &__definition {
      font-family: $heading-font;
      font-size: 1.75rem;
      color: hsl(var(--color-secondary));
    }
  }
</style>
