<template>
  <section class="b-banner">
    <div class="b-banner__content">
      <h1 class="b-banner__title">Conheça o Covidômetro</h1>

      <p class="b-banner__text">
        Fique atualizado com velocidade e transparência. O Covidômetro é uma ferramenta que mostra
        para você em tempo real o número de casos e óbitos relacionados a pandemia da COVID-19 ao
        redor do mundo.
      </p>
    </div>

    <div class="b-banner__image">
      <img src="@/assets/doctors.svg" alt="" />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.b-banner {
  display: flex;

  &__content {
  }

  &__image {
    display: none;

    @media (min-width: 48em) {
      display: block;
    }
  }
}
</style>
