import { computed, reactive, ref } from "vue"
import type { Country } from "@/types/country"

const MAX_INITIAL_COUNTRIES_TO_DISPLAY = 5
const filter = ref('')
let allCountries = reactive(<Country[]>[])

export function useCountry() {
  const message = ref('')
  const countriesToDisplay = ref(MAX_INITIAL_COUNTRIES_TO_DISPLAY)
  const isCachingData = computed(() => message.value === 'Caching in progress')
  const filteredCountries = computed(() => {
    let countries = allCountries

    if (filter.value) {
      countries = allCountries.filter((country) => country.Country.toLowerCase().includes(filter.value.toLowerCase()))
    }

    return countries.slice(0, countriesToDisplay.value)
  })

  const fetchCountries = async () => {
    const response = await fetch('https://api.covid19api.com/summary')

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados para a COVID-19 no momento. Atualize a página ou volte mais tarde.')
    }

    return await response.json()
  }

  const getCountries = async () => {
    try {
      const response: { Countries: Country[], Message: string, success?: boolean } = await fetchCountries()

      allCountries = response.Countries
      message.value = response.Message

      return response
    } catch (e: any) {
      message.value = e.message
    }
  }

  const loadMoreCountries = () => {
    countriesToDisplay.value += 5
  }

  return {
    MAX_INITIAL_COUNTRIES_TO_DISPLAY,
    filter,
    filteredCountries,
    isCachingData,
    message,
    getCountries,
    loadMoreCountries
  }
}