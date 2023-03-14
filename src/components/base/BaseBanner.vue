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
      <img src="@/assets/doctors.svg" alt="" width="433" height="410" />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.b-banner {
  display: flex;
  justify-content: space-between;

  @media (min-width: 48em) {
    gap: 1rem;
  }

  &__content {
    display: flex;
    max-width: 40rem;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 48em) {
      margin: -7.5rem 0 0 0;
    }
  }

  &__image {
    display: none;

    @media (min-width: 48em) {
      display: block;
    }
  }

  &__title {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }
}
</style>
