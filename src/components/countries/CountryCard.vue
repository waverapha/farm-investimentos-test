<template>
  <BaseCard />
</template>

<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue';

import type { Country } from '@/types/country'

export interface Props {
  country: Country
}

defineProps<Props>()

</script>

<style lang="scss"></style>
