import { render } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import CountryFilter from '@/components/countries/CountryFilter.vue'

export function factory() {
  const user = userEvent.setup()

  render(CountryFilter)

  return {
    user
  }
}