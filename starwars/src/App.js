import React from 'react'
import styled from 'styled-components'

// router components
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Import components
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'

// Main styles
import './App.css'

const App = () => {
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Router>
      <div className='App'>
        <Link to='/'>
          <h1 className='Header'>React Wars</h1>
        </Link>
        <Switch>
          <Route exact path='/' component={CharacterList} />
          <Route path='/details/:id' component={CharacterDetails} />
        </Switch>
        {/* <CharacterList list={data} />
        <CharacterDetails />*/}
      </div>
    </Router>
  )
}

export default App
