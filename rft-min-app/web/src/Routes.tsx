import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={TwLandingPage} name="twLanding" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
