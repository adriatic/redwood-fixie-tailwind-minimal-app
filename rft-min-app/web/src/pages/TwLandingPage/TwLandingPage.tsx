import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TwLandingPage = () => {
  return (
    <>
      <MetaTags title="TwLanding" description="TwLanding page" />

      <h1>TwLandingPage</h1>
      <p>
        Find me in <code>./web/src/pages/TwLandingPage/TwLandingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>twLanding</code>, link to me with `
        <Link to={routes.twLanding()}>TwLanding</Link>`
      </p>
    </>
  )
}

export default TwLandingPage
