<template>
  <BaseCard class="country-card-skeleton" :style="skeletonStyle">
  </BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue';
import { computed } from 'vue';

export interface Props {
  width?: number
  height?: number
}

const props = defineProps<Props>()

const skeletonStyle = computed(() => {
  const width = (props.width ? `${props.width}px` : null) ?? 'inherit'
  const height = (props.height ? `${props.height}px` : null) ?? 'inherit'

  return {
    width,
    height
  }
})
</script>

<style lang="scss">
  .country-card-skeleton {
    animation: skeleton-loading 0.75s linear infinite alternate;
    background-color: hsl(0, 0%, 75%);
  }

  @keyframes skeleton-loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
</style>