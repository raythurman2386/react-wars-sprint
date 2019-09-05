import React from 'react'
import styled from 'styled-components'

// router components
import { Switch, Route, Link } from 'react-router-dom'

// Import components
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'

const App = (props) => {
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  console.log(props)
  return (
    <StyledApp>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <StyledHeader className='Header'>React Wars</StyledHeader>
      </Link>
      <Switch>
        <Route exact path='/' component={CharacterList} />
        <Route path='/:id' component={CharacterDetails} />
      </Switch>
    </StyledApp>
  )
}

export default App

const StyledApp = styled.div`
  text-align: center;
`

const StyledHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 10px #fff;
  :hover {
    text-decoration: underline;
  }
`
