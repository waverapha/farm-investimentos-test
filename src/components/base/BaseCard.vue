<template>
  <component :is="tag" class="b-card">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
  export interface Props {
    tag?: string
  }

  withDefaults(defineProps<Props>(), {
    tag: 'div'
  })
</script>

<style lang="scss">
  .b-card {
    padding: 1.5rem;
    background: var(--color-tertiary);
    box-shadow: 0 0 3px #333;
  }
</style>