<template>
  <header class="b-header">
    <div class="flex-container">
      <img src="@/assets/logo.png" alt="Logo do Covidômetro" />
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.b-header {
  z-index: 4;
  align-items: center;
  margin: 0 0 1.5rem 0;
  padding: 0.5rem 0;
  background: hsl(var(--color-tertiary));
  box-shadow: 0 0 0.75rem 0 hsl(var(--color-text) / 20%);

  @media (min-width: 64em) {
    margin: 0 0 2.5rem 0;
    padding: 1rem 0;
  }
}
</style>
