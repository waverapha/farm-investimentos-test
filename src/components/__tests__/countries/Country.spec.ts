import { describe, expect, it } from 'vitest'

import { screen } from '@testing-library/vue'

import { countryCardFactory, countryContainerFactory } from './helpers'
import { useCountry } from '@/composables/country'
import { countriesMock } from '../__mocks__/requests/countries-mock'

describe('country components tests', () => {
  it('expects MAX_INITIAL_COUNTRIES_TO_DISPLAY to be 5', () => {
    const { MAX_INITIAL_COUNTRIES_TO_DISPLAY } = useCountry()

    expect(MAX_INITIAL_COUNTRIES_TO_DISPLAY).toMatchInlineSnapshot('5')
  })

  it('should have same number of countries as MAX_INITIAL_COUNTRIES_TO_DISPLAY on start', async () => {
    countryContainerFactory()

    const countryToTest = 1
    const { MAX_INITIAL_COUNTRIES_TO_DISPLAY } = useCountry()

    const items = await screen.findAllByTestId('country-card')
    expect(items.length).toBe(MAX_INITIAL_COUNTRIES_TO_DISPLAY)

    const firstItemHeading = screen.getAllByRole('heading', { level: 3 })[countryToTest]
    expect(firstItemHeading.textContent).toBe(countriesMock.Countries[countryToTest].Country)
  }, { timeout: 1000 })

  it('should render card correctly', async () => {
    countryCardFactory()

    const countryName = countriesMock.Countries[0].Country

    const heading = screen.getByText(countryName)

    expect(heading.textContent).toBe(countryName)
  })
})