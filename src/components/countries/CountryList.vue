<template>
  <BaseCard class="country-list__no-data-message" v-if="isCachingData">
    Os dados sobre Covid estão sendo compilados nesse momento, volte mais tarde por favor.
  </BaseCard>

  <div class="country-list" v-else>
    <CountryCard v-for="country in filteredCountries" :key="country.ID" :country="country" />
  </div>

  <div ref="loadMoreHandler" class="country-list__load-more"></div>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue';
import CountryCard from './CountryCard.vue'
import { useCountry } from '@/composables/country'
import { useIntersectionObserver } from '@/composables/observer'
import { ref, watch, type Ref } from 'vue';

const loadMoreHandler: Ref<Element | null> = ref(null)
const { filteredCountries, getCountries, isCachingData, loadMoreCountries } = useCountry()

await getCountries()

const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target

      if (entry.intersectionRatio >= 0.75) {
        loadMoreCountries()
      }
    }
  })
}

watch(loadMoreHandler, () => {
  if(!loadMoreHandler.value){
    return
  }

  const { createObserver } = useIntersectionObserver(intersectionCallback, {
    rootMargin: '100px'
  })
  const observer = createObserver()
  observer.observe(loadMoreHandler.value)
})
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
