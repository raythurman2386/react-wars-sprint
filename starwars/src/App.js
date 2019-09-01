import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Import components
import CharacterList from './components/CharacterList'

// Main styles
import './App.css'

const App = () => {
  // state hook for the data
  const [data, setData] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // effect hook to grab the data
  useEffect(() => {
    axios
      // grab data from api
      .get(`https://swapi.co/api/people`)

      // do something with that data
      .then(res => setData(res.data.results))

      // do something with the error
      .catch(err => console.log(err.response))
    // sync the array to what data
  }, [])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  console.log(data)

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <CharacterList list={data} />
    </div>
  )
}

export default App
