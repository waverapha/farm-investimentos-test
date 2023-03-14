<template>
  <CountryFilter />
  <CountryCard v-for="country in Countries" :key="country.ID" />
</template>

<script lang="ts" setup>
import CountryFilter from './CountryFilter.vue'
import CountryCard from './CountryCard.vue'

const fetchCountries = async () => {
  return (await fetch('https://api.covid19api.com/summary')).json()
}

const { Global, Countries } = await fetchCountries()
</script>

<style lang="scss"></style>
