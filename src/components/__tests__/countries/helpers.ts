import { render } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import intersection from '@/components/__tests__/__mocks__/browser/intersection-observe-mock';

import CountryCard from '@/components/countries/CountryCard.vue'
import CountryContainer from '@/components/countries/CountryContainer.vue'

import { countriesMock } from '@/components/__tests__/__mocks__/requests/countries-mock'

export function countryContainerFactory() {
  const user = userEvent.setup()
  const countriesResponse = structuredClone(countriesMock)

  render(CountryContainer)

  return {
    user,
    countriesResponse
  }
}

export function countryCardFactory(countryIdToTest = 0) {
  const user = userEvent.setup()
  const countriesResponse = structuredClone(countriesMock)

  render(CountryCard, {
    props: {
      country: countriesMock.Countries[countryIdToTest]
    }
  })

  return {
    user,
    countriesResponse
  }
}