<template>
  <BaseCard tag="article" class="country-filter">
    <h2>Filtrar dados sobre um país</h2>

    <div class="country-filter__input">
      <IconSearch class="country-filter__input-icon" />
      <input
        class="country-filter__input-field"
        type="search"
        aria-label="Digite o nome do país para buscar"
        placeholder="Digite o nome do país"
        @input="handleUpdateFilter"
        >
    </div>
  </BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import { useCountry } from '@/composables/country';

const { filter } = useCountry()

const handleUpdateFilter = (event: Event) => {
  filter.value = (event.target as HTMLInputElement).value
}
</script>

<style lang="scss">
.country-filter {
  margin: 0 0 1.5rem 0;
  text-align: center;

  &__input {
    display: grid;
    align-items: center;
    width: 80%;
    margin: 1rem auto 0 auto;

    &-icon {
      grid-area: -1 / -1;
      fill: hsl(var(--color-secondary));
    }

    &-field {
      grid-area: -1 / -1;
      width: 100%;
      padding: 0.5rem 0.5rem 0.5rem 2.75rem;
      border: 0;
      border-bottom: 0.125rem solid hsl(var(--color-secondary));
      background: none;
  
      &::placeholder {
        color: hsl(var(--color-text) / 40%);
      }
    }
  }
}
</style>
