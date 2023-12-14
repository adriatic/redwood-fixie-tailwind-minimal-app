import { render } from '@redwoodjs/testing/web'

import TwLandingPage from './TwLandingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TwLandingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TwLandingPage />)
    }).not.toThrow()
  })
})
