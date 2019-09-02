import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CharacterDetails = ({ match }) => {
  console.log(match)
  // state hook for the data
  const [character, setCharacter] = useState({})

  // effect hook to grab the data
  useEffect(() => {
    axios
      // grab data from api
      .get(`https://swapi.co/api/people/${match.params.id}`)

      // do something with that data
      .then(res => setCharacter(res.data))

      // do something with the error
      .catch(err => console.log(err.response))
    // sync the array to what data
  }, [])

  // console.log(character, 'character')

  return (
    <div>
      <h2>{character.name}</h2>
    </div>
  )
}

export default CharacterDetails
