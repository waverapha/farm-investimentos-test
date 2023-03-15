import { computed, reactive, ref } from "vue"
import type { Country } from "@/types/country"

const MAX_COUNTRIES_TO_DISPLAY = 5
const filter = ref('')
let allCountries = reactive(<Country[]>[])

export function useCountry() {
  const fetchCountries = async () => (await fetch('https://api.covid19api.com/summary')).json()

  const getCountries = async () => {
    const response: { Countries: Country[], Message: string } = await fetchCountries()

    allCountries = response.Countries
    message.value = response.Message

    return response
  }

  const message = ref('')

  const isCachingData = computed(() => message.value === 'Caching in progress')

  const filteredCountries = computed(() => {
    let countries = allCountries

    if (!filter.value) {
      return countries
    } else {
      countries = allCountries.filter((country) => country.Country.toLowerCase().includes(filter.value.toLowerCase()))
    }

    return countries.slice(0, MAX_COUNTRIES_TO_DISPLAY)

  })

  return {
    MAX_COUNTRIES_TO_DISPLAY,
    filter,
    filteredCountries,
    isCachingData,
    getCountries
  }
}