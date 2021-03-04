import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  Home,
  Login
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
