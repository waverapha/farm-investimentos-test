import { describe, expect, it } from 'vitest'

import { screen } from '@testing-library/vue'

import { factory } from './helpers'
import { countryContainerFactory } from '../countries/helpers'
import { useCountry } from '@/composables/country'

describe('suite', () => {
  it('should renders search input properly', () => {
    factory()

    const searchInput = screen.getByRole('searchbox')

    expect(searchInput).toBeTruthy()
  })

  it('should filter items after typing on input', async () => {
    const { user } = countryContainerFactory()
    const searchbox = await screen.findByRole('searchbox')
    const { MAX_INITIAL_COUNTRIES_TO_DISPLAY } = useCountry()

    const termToSearch = 'Bra'

    const filters = new Map(Object.entries({
      [termToSearch]: 2
    }))

    const items = await screen.findAllByTestId('country-card')
    expect(items.length).toBe(MAX_INITIAL_COUNTRIES_TO_DISPLAY)

    await user.type(searchbox, termToSearch)

    const filteredItems = screen.getAllByTestId('country-card')
    expect(filteredItems.length).toBe(filters.get(termToSearch))

    const firstItemHeading = await screen.getAllByRole('heading', { level: 3 })[0]
    expect(firstItemHeading.textContent).toBe('Brazil')
  })
})